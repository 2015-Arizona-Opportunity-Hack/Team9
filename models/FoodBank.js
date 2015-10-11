'use strict';

var mongoose = require('mongoose');

var foodBankSchema = new mongoose.Schema({
  name: String,
  location: {
    address_1: String,
    address_2: String,
    city: String,
    state: String,
    zip: String
  },
  info: String,
  timeStart: Date,
  timeEnd: Date,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('FoodBank', foodBankSchema);
