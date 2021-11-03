const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    name: String,
    location: String,
    description: String,
    date: Date
})

module.exports.Event = mongoose.model('event',eventSchema,'event')
/* const mongoose = require('mongoose');

const adSchema = mongoose.Schema({
  name: String,
  price: Number
})

module.exports.Ad = mongoose.model('Ad', adSchema) */