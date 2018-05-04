var owners = require('../controllers/owner.controller.js');
var express = require('express');
var passport = require('passport');
require('../../config/passport.config')(passport);
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        owners.findAll(req, res);
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

router.get('/:ownerId', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        owners.findOne(req, res);
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }  
});

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    console.log(req.body);
    owners.create(req, res);    
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
module.exports = router;