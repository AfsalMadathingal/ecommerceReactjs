const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminId: {
        type: String,
        required: [true, 'id is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
