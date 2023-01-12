import axios from 'axios';
import { OPENEXCHANGERATES_KEY } from '../config/keys.config';

export const getUsage = async () => {
    try {
        const { data } = await axios(`https://openexchangerates.org/api/usage.json?app_id=${OPENEXCHANGERATES_KEY}`);
        return data;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
