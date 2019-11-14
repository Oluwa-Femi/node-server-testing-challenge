const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove,
    find,
    findById
}

async function insert(car) {
    const [id] = await db('cars').insert(car, 'id');
    return db('cars').where({id}).first(); // allows to check for a specific car
};

function remove(id){
    return db('cars').where('id', Number(id)).delete();
};

function find() {
    return db('dogs');
}

function findById(id) {
    return db('dogs').where({ id }).first()
};