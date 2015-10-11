'use strict';

var mongoose = require('mongoose');

var donationSchema = new mongoose.Schema({
  //Name of donator
  name: String,
  price: Number,
  event: String,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Donation', donationSchema);
