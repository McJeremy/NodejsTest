var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/chihuo');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:String,
    password:String
});

exports.user = db.model("users",userSchema);