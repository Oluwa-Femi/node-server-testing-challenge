const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove
}

async function insert(car) {
    const [id] = await db('cars').insert(car, 'id');
    return db('cars').where({id}).first(); // allows to check for specific dog
}

async function remove(car) {
    const [id] = await db('cars').remove(car, 'id');
    return db('cars').where({id}).first(); // same code, endpoint creates different behavior
}