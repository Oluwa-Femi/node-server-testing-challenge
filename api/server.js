const express = require('express');

// Model goes here
const Cars = require('../cars/carsModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: "Up" });
});

server.get('/dogs', (req, res) => {
    Dogs.find()
        .then(dogs => res.status(200).json(dogs))
        .catch(err => res.status(500).json({ message: err }))
});

server.get('/:id', (req, res) => {
    const { id } = req.params;
    Cars.findById(id)
        .then(car => {
            if (car) res.status(200).json(car)
            else res.status(404).json({ message: 'Car does not exist' })
        })
        .catch(err => res.status(500).json({ message: err }))
});

server.post('/', (req, res) => {
    const carData = req.body;
    Dogs.insert(carData)
        .then(car => res.status(201).json(car))
        .catch(err => res.status(500).json({ message: err }))
});

server.delete('/:id', (req, res) => {
    const { id } = req.params;
    Cars.remove(id)
        .then(car => {
            if (car) res.json({ removed: car })
            else res.status(404).json({ message: 'Car does not exist' })
        })
        .catch(err => res.status(500).json({ message: err }))
});

module.exports = server;