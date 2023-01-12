import request from 'supertest';
import app from '../../src/index';

describe('Currencies', () => {
    it('GET /currencies return 200', async () => {
        const res = await request(app).get('/currencies');
        expect(res.status).toEqual(200)
    })
})