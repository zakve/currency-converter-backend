import express from 'express';
import validator from 'validator';

import { getLatestExchangeRates } from '../controllers/latest.controller';
import { updateItem } from '../services/DatabaseService';

const router = express.Router();

router.post('/', async (req, res) => {
    const { amount, to } = req.body;

    // Input validation
    if (!amount || !validator.isCurrency(amount.toString(), { allow_negatives: false })) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    // In free version of openexchangerates.org will be used only USD
    // if (!from || !validator.isAlpha(from.toString())) {
    //     return res.status(400).json({ error: 'Invalid from currency' });
    // }

    if (!to || !validator.isAlpha(to.toString())) {
        return res.status(400).json({ error: 'Invalid currency' });
    }
    try {
        // /convert in openexchangerates.org is available only for premium
        // const data = await getConvert({ value, from, to });
        const data = await getLatestExchangeRates();

        if (!data)
            throw new Error("GET exchange rates failed");

        //Calculate the converted amount
        const convertedAmount = amount * data.rates[to];
        if (!convertedAmount)
            throw new Error("Currency was not found");

        const request = { amount, to }
        const response = convertedAmount

        // Update statistics in DB
        await updateItem(to, parseInt(amount), 1)

        res.status(200).json({ data, request, response });
    } catch (error) {
        const e = error as Error;
        res.status(400).json({ message: e.message });
    }
});

export default router