import express from 'express';
import { getCurrencies } from '../controllers/currency.controller';

const router = express.Router();

router.get('/currencies', async (req, res) => {
    try {
        const data = await getCurrencies();
        res.status(200).json(data);
    } catch (error) {
        const e = error as Error;
        res.status(500).json({ message: e.message });
    }
});

export default router