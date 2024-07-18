const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); 
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
