var Applicant = require('../models/model.js')

function createApp (req, res){

	var applicant = new Applicant({
		name: req.body.name,
		bio: req.body.bio,
		skills: req.body.skills,
		years: req.body.years,
		why: req.body.why,
	})
	applicant.save(function(err, savedApp){
		res.send(savedApp)
	})
}

function getApp (req, res){
	Applicant.find({}, function(err, apps){	
	console.log(apps)
	res.send(apps)
})}


// function getApp (req, res){
// 	// Get ONE
// 	if(req.params.heroID){
// 		Hero.findOne({_id : req.params.heroID}, function(err, doc){
// 			res.send(doc)
// 		})
// 	}
// 	// Get MANY
// 	else{
// 		Hero.find({}, function(err, docs){
// 			res.send(docs)
// 		})
// 	}
// }

module.exports = {
	createApp : createApp,
	getApp : getApp
}