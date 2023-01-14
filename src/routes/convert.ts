import express from 'express';
import { getConvert } from '../controllers/convert.controller';
import validator from 'validator';

const router = express.Router();

router.post('/', async (req, res) => {
    const { value, from, to } = req.body;

    // Input validation
    if (!value || !validator.isCurrency(value.toString(), { allow_negatives: false })) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    if (!from || !validator.isAlpha(from.toString())) {
        return res.status(400).json({ error: 'Invalid from currency' });
    }

    if (!to || !validator.isAlpha(to.toString())) {
        return res.status(400).json({ error: 'Invalid to currency' });
    }
    try {
        const data = await getConvert({ value, from, to });
        res.status(200).json(data);
    } catch (error) {
        const e = error as Error;
        res.status(500).json({ message: e.message });
    }
});

export default router