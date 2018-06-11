let mongoose = require("mongoose")
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstname: String,
    lastname: String,
    pwd: String,
    email: String
})

module.exports = mongoose.model('Users', UserSchema);