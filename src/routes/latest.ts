import express from 'express';
import { getLatestExchangeRates } from '../controllers/latest.controller';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getLatestExchangeRates();
        res.status(200).json(data);
    } catch (error) {
        const e = error as Error;
        res.status(500).json({ message: e.message });
    }
});

export default router