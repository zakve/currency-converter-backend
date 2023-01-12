import request from 'supertest';
import app from '../../src/index';

describe('Usage', () => {
    it('GET /usage return 200', async () => {
        const res = await request(app).get('/usage');
        expect(res.status).toEqual(200)
    })
})