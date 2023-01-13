import request from 'supertest';
import app from '../../src/index';

describe('Latest Exchange Rates', () => {
    it('GET /latest return 200', async () => {
        const res = await request(app).get('/latest');
        expect(res.status).toEqual(200)
    })
})