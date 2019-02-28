var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');
var util = require( 'util' );


/* GET ALL USERS */
router.get('/',async  function(req, res, next) {
  console.log("Get all user");
  User.find(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });	  
  
});


/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE USER */
router.post('/', async function(req, res, next) {
 
	console.log("User Registring:" + util.inspect(req.body))
	
	var userstatus = {status: "OK"}
	console.log("RETURNED" + userstatus)
	
	if (userstatus.status != "OK")
	{
	    res.json(userstatus);
		return
	}
	
	try { 
	  console.log("Adding user")
	  newUserData = await User.create(req.body);
	  console.log("user created:" + util.inspect(newUserData));
           req.session['userdata'] = { user_id: newUserData._id, user_name: newUserData.user_name };
	   res.json({status: "SUCESS"});
	}
	catch (error)
	{
		res.json({status: "ERROR", message: error});
	}
});

/* UPDATE USER */
router.put('/:id', async function(req, res, next) {
    console.log("Updating user:" + util.inspect(req.body));
    try {

	let userData = User.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json({status: "OK"});
    } catch (error)
    {
      res.json({status:"ERROR", message: error});
    }
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
