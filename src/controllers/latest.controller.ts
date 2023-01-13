import axios from 'axios';
import { OPENEXCHANGERATES_KEY } from '../config/keys.config';

export const getLatestExchangeRates = async () => {
    try {
        const { data } = await axios(`https://openexchangerates.org/api/latest.json?app_id=${OPENEXCHANGERATES_KEY}`);
        return data;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
