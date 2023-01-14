import axios from 'axios';
import { OPENEXCHANGERATES_KEY } from '../config/keys.config';
import { IConvert } from '../models/convert.model';

export const getConvert = async ({ value, from, to }: IConvert) => {
    try {
        const { data } = await axios(`https://openexchangerates.org/api/convert/${value}/${from}/${to}?app_id=${OPENEXCHANGERATES_KEY}`);
        return data;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
