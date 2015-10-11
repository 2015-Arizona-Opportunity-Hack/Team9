'use strict';

var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: String,
  location: {
    address_1: String,
    address_2: String,
    city: String,
    state: String,
    zip: String
  },
  timeStart: Date,
  timeEnd: Date,
  info: String,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Event', eventSchema);
