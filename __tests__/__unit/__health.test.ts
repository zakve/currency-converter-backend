import request from 'supertest';
import app from '../../src/index';

describe('Health', () => {
    it('GET /health return 200', async () => {
        const res = await request(app).get('/health');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({ message: "OK" })
    })

    it('GET / return 200', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({ message: "OK" })
    })
})