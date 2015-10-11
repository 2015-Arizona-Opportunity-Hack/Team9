'use strict';

var express = require('express'),
  mongoose = require('mongoose'),
  https = require('https'),
  router = express.Router();

var Volunteer = mongoose.model('Volunteer');

router.route('/')

  //Get all notes that have been tracked
  .get(function(req, res){
    Volunteer.find(function(err, data){
      if(err)
        return res.send(err);
      if(!data){
        console.log("No volunteer found");
        return res.send({message: "No volunteer created"});
      }
      return res.send(data);
    });
  })
  .post(function(req, res){
    var volunteer = new Volunteer();
        volunteer.firstname = req.body.firstname;
        volunteer.lastname = req.body.lastname;
        volunteer.birthdate = req.body.birthdate;
        volunteer.email = req.body.email;
        volunteer.phone = req.body.phone;
        volunteer.address = {
          address_1: req.body.address_1,
          address_2: req.body.address_2,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
        },
        volunteer.oi = {
          work: req.body.oi.work,
          friend: req.body.oi.friend,
          news: req.body.oi.news,
          other: req.body.oi.other,
          otherInfo: req.body.oi.otherInfo
        },
        volunteer.aoi = {
          operations: {
            officeAdmin: req.body.aoi.operations.officeAdmin,
            accounting: req.body.aoi.operations.accounting,
            maintenance: req.body.aoi.operations.maintenance
          },
          foodDonation: {
            pickups: req.body.aoi.foodDonation.pickups,
            sorting: req.body.aoi.foodDonation.sorting,
            distribution: req.body.aoi.foodDonation.distribution
          },
          spec_events:{
            esol: req.body.aoi.spec_events.esol,
            opSanta: req.body.aoi.spec_events.opSanta,
            back2school: req.body.aoi.spec_events.back2school,
            fundraising: req.body.aoi.spec_events.fundraising
          }
        },
        volunteer.references = [{
          name: req.body.references[0].name,
          relationship: req.body.references[0].relationship,
          phone: req.body.references[0].phone,
          email: req.body.references[0].email,
          address: {
            address_1: req.body.references[0].address.address_1,
            address_2: req.body.references[0].address.address_2,
            city: req.body.references[0].address.city,
            state: req.body.references[0].address.state,
            zip: req.body.references[0].address.zip
          }
        },
        {
          name: req.body.references[1].name,
          relationship: req.body.references[1].relationship,
          phone: req.body.references[1].phone,
          email: req.body.references[1].email,
          address: {
            address_1: req.body.references[1].address.address_1,
            address_2: req.body.references[1].address.address_2,
            city: req.body.references[1].address.city,
            state: req.body.references[1].address.state,
            zip: req.body.references[1].address.zip
          }
        }
      ],
      volunteer.additional = {
        fluent: {
          speak: req.body.additional.fluent.speak,
          write: req.body.additional.fluent.write
        },
        volunteerInfo: req.body.additional.volunteerInfo
      },
      volunteer.emergencyContact = {
        name: req.body.emergencyContact.name,
        relationship: req.body.emergencyContact.relationship,
        phone: req.body.emergencyContact.phone
      }
        volunteer.save(function(err, data) {
            if (err){
                return res.status(500).send(err);
            }
            return res.json(data);
        });
  });
router.route('/:id')
  .get(function(req, res){
    Volunteer.findOne({_id: req.params.id},function(err, data){
      if(err)
        return res.send(err);
      if(!data){
        console.log("No note found");
        return res.send({message: "No notes found!"});
      }
      return res.send(data);
    });
  })
  .post(function(req, res){
    res.send({error: "This API call does not support POST."});
  })
  .put(function(req, res){
    Volunteer.findById(req.params.id, function(err, volunteer){
        if(err)
          return res.send(err);
        if(!data){
          console.log("No events found");
          return res.send({message: "No events found"});
        }
        volunteer.firstname = req.body.firstname;
        volunteer.lastname = req.body.lastname;
        volunteer.birthdate = req.body.birthdate;
        volunteer.email = req.body.email;
        volunteer.phone = req.body.phone;
        volunteer.address = {
          address_1: req.body.address_1,
          address_2: req.body.address_2,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
        },
        volunteer.oi = {
          work: req.body.oi.work,
          friend: req.body.oi.friend,
          news: req.body.oi.news,
          other: req.body.oi.other,
          otherInfo: req.body.oi.otherInfo
        },
        volunteer.aoi = {
          operations: {
            officeAdmin: req.body.aoi.operations.officeAdmin,
            accounting: req.body.aoi.operations.accounting,
            maintenance: req.body.aoi.operations.maintenance
          },
          foodDonation: {
            pickups: req.body.aoi.foodDonation.pickups,
            sorting: req.body.aoi.foodDonation.sorting,
            distribution: req.body.aoi.foodDonation.distribution
          },
          spec_events:{
            esol: req.body.aoi.spec_events.esol,
            opSanta: req.body.aoi.spec_events.opSanta,
            back2school: req.body.aoi.spec_events.back2school,
            fundraising: req.body.aoi.spec_events.fundraising
          }
        },
        volunteer.references = [{
          address_1: req.body.references[0].address_1,
          address_2: req.body.references[0].address_2,
          city: req.body.references[0].city,
          state: req.body.references[0].state,
          zip: req.body.references[0].zip
        },
        volunteer.additional = {
          fluent: {
            speak: req.body.additional.fluent.speak,
            write: req.body.additional.fluent.write
          },
          volunteerInfo: req.body.additional.volunteerInfo
        },
        {
          address_1: req.body.references[1].address_1,
          address_2: req.body.references[1].address_2,
          city: req.body.references[1].city,
          state: req.body.references[1].state,
          zip: req.body.references[1].zip
        }
      ],
      volunteer.emergencyContact = {
        name: req.body.emergencyContact.name,
        relationship: req.body.emergencyContact.relationship,
        phone: req.body.emergencyContact.phone
      }
        volunteer.save(function(err, data){
          if(err)
            res.send(err);
          return res.json(data);
        });
      });
  })
  .delete(function(req, res){
    Volunteer.remove({_id: req.params.id}, function(err){
      if(err)
        return res.send(err);
      return res.json('Deleted Event id: ' + req.params.id);
    });
  });

module.exports = router;
