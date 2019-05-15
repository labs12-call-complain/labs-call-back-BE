const router = require('../../config/routes');
const request = require('supertest');
const db = require('../data/dbConfig')

describe('Routes', () => {

    afterEach( async () => {
        await db('games').truncate();
    })
    
    describe('POST /games', () => {
        it('should return status 201 if successful or 422 if fails', async () => {
            const res = await request(router).post('/games')
            expect(res.status).toBe(201 || 422)
        })
        it('should insert the provided game', async () => {
            await games.insert({title: 'Pacman', genre: 'Arcade'})
            const games = await db('games');
            expect('games').toHaveLength(1)
        })
        it('should return an id', async () => {
            const res = await request(router).post('/games');
            expect(res.body).objectContaining({
                id: expect.any(Number),
                // title: expect.any(String),
                // genre: expect.any(String)
            })
        })
    })
    
    describe('GET /games', () => {
        it('should return status 200', async () => {
            const res = await request('router').get('/games');
            expect(res.status).toBe(200)
        })
        it('should return an array', async () => {
            const res = await request(router).get('/games');
            expect(res.body).toHaveLength(1)
        })
        it('should return JSON', async () => {
            const res = await request(router).get('/games');
            expect(res.type).toBe('application/json')
        })
    })
    
    

})