var mongoose = require('mongoose');

var OwnerSchema = mongoose.Schema({
    name: String,
    age: Number,
    address: String
});

module.exports = mongoose.model('Owner', OwnerSchema);