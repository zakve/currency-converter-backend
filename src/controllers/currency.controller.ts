import axios from 'axios';
import { OPENEXCHANGERATES_KEY } from '../config/keys.config';

export const getCurrencies = async () => {
    try {
        const { data } = await axios(`https://openexchangerates.org/api/currencies.json?app_id=${OPENEXCHANGERATES_KEY}`);
        return data;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
