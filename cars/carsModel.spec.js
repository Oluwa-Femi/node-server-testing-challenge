const db = require('../data/dbConfig');
const Dogs = require('./carsModel');

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
    it('Should delete dog from database', async () => {
        await Dogs.remove(1);
        const dogs = await db('dogs');
        expect(dogs).toHaveLength(0);
    })

    it('Should only remove dog when ID is provided', async () => {
        Dogs.insert({ breed: 'Dachshund' });
        await Dogs.remove();
        const doggos = await db('dogs')
        expect(doggos).toHaveLength(1);
    })
}) 