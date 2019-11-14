const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove
}

async function insert(car) {
    const [id] = await db('cars').insert(car, 'id');
    return db('cars').where({id}).first(); // allows to check for specific dog
}

function remove(id){
    return db('cars').where('id', Number(id)).delete();
}