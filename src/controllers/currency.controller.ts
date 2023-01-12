import axios from 'axios';
import { OPENEXCHANGERATES_APP_ID } from '../config/keys.config';

export const getCurrencies = async () => {
    try {
        const { data } = await axios(`https://openexchangerates.org/api/currencie.json?app_id=${OPENEXCHANGERATES_APP_ID}`);
        return data;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
