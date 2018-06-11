let mongoose = require("mongoose")
let Schema = mongoose.Schema;

let TapSchema = new Schema({
    score: Number,
    firstname: String,
    lastname: String,
    date: Date
})

module.exports = mongoose.model('Taps', TapSchema);