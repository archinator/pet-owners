var mongoose = require('mongoose');

var PetSchema = mongoose.Schema({
    name: String,
    description: String,
    age: Number,
    owner: String
});

module.exports = mongoose.model('Pet', PetSchema);