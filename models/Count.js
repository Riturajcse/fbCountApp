var mongoose = require('mongoose');

var CountSchema = new mongoose.Schema({
  name: String,
  count: Number,
  note: String
});

module.exports = mongoose.model('userCount', CountSchema);
