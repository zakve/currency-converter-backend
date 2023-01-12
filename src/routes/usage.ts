import express from 'express';
import { getUsage } from '../controllers/usage.controller';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getUsage();
        res.status(200).json(data);
    } catch (error) {
        const e = error as Error;
        res.status(500).json({ message: e.message });
    }
});

export default router