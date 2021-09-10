import supertest from 'supertest'

/**
 * Descreve um bloco de teste
 */
describe('Beach forecast funcional test', () => {

    it('should return a forecast with just a few times', async () => {

        const { body, status } = await supertest(app).get('/forecast');

        expect(status).toBe(200);

        expect(body).toBe([{
            forecast: 'cold ❄'
        },
        {
            forecast: 'heat ☀'
        }]);
    })

})