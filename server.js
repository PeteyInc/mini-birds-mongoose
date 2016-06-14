var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/birds-mongoose');
mongoose.connection.once('open', function () {
	console.log('connected to mongoDB');
});

var port = 3000;
// var Schema = mongoose.Schema;
// var sightSchema = new Schema({
// 	name: {
// 		type: String,
// 		lowercase: true,
// 		required: true
// 	},
// 	order: {
// 		type: String,
// 		maxLength: 20
// 	},
// 	status: {
// 		type: String,
// 		lowercase: true,
// 		enum: [
//       "extinct",
//       "near threatened",
//       "least concern"
//     ]
// 	},
// 	confirmed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	numberSeen: {
// 		type: Number,
// 		min: 1
// 	}
// });

// var Sighting = mongoose.model('Sighting', sightSchema);
var Sighting = require('./Sightings.js');

// create: function(req, res) {
//     var newSighting = new Sighting(req.body);
//     newSighting.save(function(err, result) {
//       if (err) return res.status(500).send(err);
//       else res.send(result);
//     });
//   },

app.post('/api/sighting', function (req, res) {
	var sighting = new Sighting(req.body);
	sighting.save(function (err, result) {
		if (err) {
			return res.status(500).json(err);
		} else {
			res.status(200).json(result);
		}
	});
	// res.end();
});

app.get('/api/sighting', function (req, res) {
	console.log('GET sighting');
	res.end();
});

app.delete('/api/sighting', function (req, res) {
	console.log('DELETE sighting');
	res.end();
});

app.put('/api/sighting', function (req, res) {
	console.log('PUT sighting');
	res.end();
});

app.listen(port, function () {
	console.log("Started server on port", port);
});
