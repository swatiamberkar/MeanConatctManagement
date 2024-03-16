const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String,  required:true },
    email: { type: String,  required:true },
    password: { type: String }
}, {
    versionKey: false
});

const signup = mongoose.model('signup', signupSchema);
module.exports = signup;