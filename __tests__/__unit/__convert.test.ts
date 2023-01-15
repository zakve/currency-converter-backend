import request from 'supertest';
import app from '../../src/index';

describe('Convert endpoint', () => {
    it('POST /convert return 200', async () => {
        const res = await request(app)
            .post('/convert')
            .send({
                amount: 10,
                to: 'EUR'
            })
        expect(res.status).toEqual(200)
    })

    it('should return error if amount is not provided', async () => {
        const res = await request(app)
            .post('/convert')
            .send({
                to: 'EUR'
            })
        expect(res.status).toBe(400);
        expect(res.body).toEqual({ error: 'Invalid amount' });
    })

    it('should return error if invalid amount is provided', async () => {
        const response = await request(app)
            .post('/convert')
            .send({
                amount: '10a',
                to: 'EUR'
            });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid amount' });
    });

    it('should return error if to is not provided', async () => {
        const response = await request(app)
            .post('/convert')
            .send({
                amount: 10,
            });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid currency' });
    });

    it('should return error if currency does not exist', async () => {
        const response = await request(app)
            .post('/convert')
            .send({
                amount: 10,
                to: "AAA"
            });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ message: 'Currency was not found' });
    });
})