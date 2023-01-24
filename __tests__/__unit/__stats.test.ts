import request from 'supertest';
import app from '../../src/index';

describe('Statistics', () => {
    it('GET /stats return 200', async () => {
        const res = await request(app).get('/stats');
        expect(res.status).toEqual(200)
    })
})