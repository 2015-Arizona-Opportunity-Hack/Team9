'use strict';

var express = require('express'),
  mongoose = require('mongoose'),
  https = require('https'),
  router = express.Router();

var Event = mongoose.model('Event');

router.route('/')

  //Get all notes that have been tracked
  .get(function(req, res){
    Event.find(function(err, data){
      if(err)
        return res.send(err);
      if(!data){
        console.log("No events found");
        return res.send({message: "No events created"});
      }
      return res.send(data);
    });
  })
  .post(function(req, res){
    var event = new Event();
        event.name = req.body.name;
        event.cost = req.body.cost;
        event.timeStart = req.body.timeStart;
        event.timeEnd = req.body.timeEnd;
        event.info = req.body.info;
        event.location = {
          address_1: req.body.address_1,
          address_2: req.body.address_2,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
        }
        event.save(function(err, data) {
            if (err){
                return res.status(500).send(err);
            }
            return res.json(data);
        });
  });
router.route('/:id')
  .get(function(req, res){
    Event.findOne({_id: req.params.id},function(err, data){
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
    Event.findById(req.params.id, function(err, data){
        if(err)
          return res.send(err);
        if(!data){
          console.log("No events found");
          return res.send({message: "No events found"});
        }
        data.name = req.body.name;
        data.cost = req.body.cost;
        data.timeStart = req.body.timeStart;
        data.timeEnd = req.body.timeEnd;
        data.info = req.body.info;
        data.location = {
          address_1: req.body.address_1,
          address_2: req.body.address_2,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
        }
        data.save(function(err, data){
          if(err)
            res.send(err);
          return res.json(data);
        });
      });
  })
  .delete(function(req, res){
    Event.remove({_id: req.params.id}, function(err){
      if(err)
        return res.send(err);
      return res.json('Deleted Event id: ' + req.params.id);
    });
  });

module.exports = router;
