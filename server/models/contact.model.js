const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    firstname: { type: String,  required:true },
    lastname: { type: String,  required:true },
    phonenumber: { type: String },
    city: { type: String }  
}, {
    versionKey: false
});

const contact = mongoose.model('contact', contactSchema);
module.exports = contact;
