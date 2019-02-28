var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_name: String,
  user_full_name: String,
  user_email: String,
  user_status: { type: String, default: 'Active'} ,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', UserSchema);

