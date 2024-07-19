const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
