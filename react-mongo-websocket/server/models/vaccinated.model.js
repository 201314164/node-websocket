const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vaccinatedSchema = new Schema({
    name : { type: String, required:true },
    location : { type: String, required:true },
    gender : { type: String, required:true },
    age : { type: Number, required:true },
    type : { type: String, required:true },
    route : { type: String, required:true }
},{
    timestamps: true
});

const Vaccinated = mongoose.model('Vaccinated', vaccinatedSchema);
module.exports = Vaccinated;