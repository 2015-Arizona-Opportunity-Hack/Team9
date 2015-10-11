'use strict';

var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  //Name of person volunteering
  name: String,
  email: String,
  phone: Number,
  location: {
    address_1: String,
    address_2: String,
    city: String,
    state: String,
    zip: String
  },
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Event', eventSchema);
