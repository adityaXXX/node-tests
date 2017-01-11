module.exports.add = function(a, b){
  return a+b;
}

module.exports.sqrt = function(x){
  return x*x;
}

module.exports.asyncAdd = function(a, b, callback){
  setTimeout(function(){
    callback(a + b);
  }, 1000);
};

module.exports.setName = function(user, fullName){
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}
