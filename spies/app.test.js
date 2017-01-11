const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe("App", function(){
  var db = {
    saveUser : expect.createSpy()
  };

  app.__set__('db', db);

it("should call spy correctly", function(){
  var spy = expect.createSpy();
  spy();
  expect(spy).toHaveBeenCalled();
});

it("should call saveUser with user object", function(){
  var email = "aditya@nodejs.com";
  var password = "12345678";

  app.handleSignup(email, password);
  expect(db.saveUser).toHaveBeenCalledWith({email, password});
});

});
