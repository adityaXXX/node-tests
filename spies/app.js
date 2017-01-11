var db = require ('./db');

module.exports.handleSignup = function(email, password){
  db.saveUser({email, password});
};
