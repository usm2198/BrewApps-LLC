const {getBooks, postBooks, putBooks, deleteBooks} = require('../Controller/BooksController');

const route = require('express').Router()

// Get Route
route.get('/', getBooks);

//Post Route
route.post('/', postBooks)

// Put Route
route.put('/:id', putBooks)

// Delete Route
route.delete('/:id', deleteBooks)

module.exports = route;
