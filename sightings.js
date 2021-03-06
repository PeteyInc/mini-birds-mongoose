var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var sightSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  order: {
    type: String,
    maxLength: 20
  },
  status: {
    type: String,
    lowercase: true,
    enum: [
      "extinct",
      "near threatened",
      "least concern"
    ]
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  numberSeen: {
    type: Number,
    min: 1
  }
});

module.exports = mongoose.model('Sighting', sightSchema);
