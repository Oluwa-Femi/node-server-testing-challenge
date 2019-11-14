const db = require('../data/dbConfig');
const Cars = require('./carsModel');

describe('Cars model', () => {
    beforeEach(async () => { // Cleans up table before each test
        await db('cars').truncate();
    });

    it('Is using testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('Insert method', () => {
        it('Should add a car to database', async () => {
            const records = await db('cars');
            expect(records).toHaveLength(0);
            await Cars.insert({ type: 'Truck' });
            const cars = await db('cars');
            expect(cars).toHaveLength(1);
        })

        it('Should add a specific car to database', async () => {
            let car = await Cars.insert({ breed: 'Sports car' });
            expect(car.breed).toBe('Sports car');
        })
    })
})

describe('Remove method', () => {
    it('Should delete car from database', async () => {
        await Cars.remove(1);
        const cars = await db('cars');
        expect(cars).toHaveLength(0);
    })

    it('Should only remove a car when ID is provided', async () => {
        Cars.insert({ type: 'Four wheels' });
        await Cars.remove();
        const voooom = await db('cars')
        expect(voooom).toHaveLength(1);
    })
}) 