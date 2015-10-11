'use strict';

var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: String,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Event', eventSchema);
