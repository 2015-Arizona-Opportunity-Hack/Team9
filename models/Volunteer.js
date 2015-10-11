'use strict';

var mongoose = require('mongoose');

var volunteerSchema = new mongoose.Schema({
  //Name of person volunteering
  firstname: String,
  lastname: String,
  phone: String,
  email: String,
  birthdate: Date,
  address: {
    address_1: String,
    address_2: String,
    city: String,
    state: String,
    zip: String
  },
  oi: {
    work: Boolean,
    friend: Boolean,
    news: Boolean,
    other: Boolean,
    otherInfo: String
  },
  aoi: {
    operations: {
      officeAdmin: Boolean,
      accounting: Boolean,
      maintenance: Boolean
    },
    foodDonation: {
      pickups: Boolean,
      sorting: Boolean,
      distribution: Boolean
    },
    spec_events:{
      esol: Boolean,
      opSanta: Boolean,
      back2school: Boolean,
      fundraising: Boolean
    }
  },
  additional: {
    fluent: {
      speak: [],
      write: []
    },
    volunteerInfo: String
  },
  references: [
    {
      name: String,
      relationship: String,
      phone: String,
      email: String,
      address: {
        address_1: String,
        address_2: String,
        city: String,
        state: String,
        zip: String
      }
    },
    {
      name: String,
      relationship: String,
      phone: String,
      email: String,
      address: {
        address_1: String,
        address_2: String,
        city: String,
        state: String,
        zip: String
      }
  }],
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Volunteer', volunteerSchema);
