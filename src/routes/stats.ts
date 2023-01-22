import express from 'express';
import { getStats } from '../services/DatabaseService';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getStats();
        // Send the data back to the client
        res.status(200).json(data)
        //res.status(200).json({ MostPopularDestinationCurrency, TotalAmountConverted, TotalConversionRequests });
    } catch (error) {
        const e = error as Error;
        res.status(500).json({ message: e.message });
    }
});

export default router