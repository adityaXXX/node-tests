const utils = require('./utils');
const expect = require('expect');

describe('Utils', function(){
  describe('#add', function(){

    it("should add two numbers", function(){
      var res = utils.add(45, 45);

      expect(res).toBe(90).toBeA("number");
      // if(res !== 90){
      //   throw new Error(`Expected 90 but got ${res}`);
      // }
    });

  });

describe("#square", function(){

  it("should square a number", function(){
    var res = utils.sqrt(5);

    if(res !== 25){
      throw new Error(`Expected 25 but got ${res}`);
    }
  });
  });

});

  // ---------------DOUBT-----------------
  // it("should async add two numbers", function(){
  //   utils.asyncAdd(4, 3, function(sum){
  //     expect(sum).toBe(10).toBeA("number");
  //   });
  // });


it("should set first and last Names", function(){
  var user = {
    age : 20,
    location : "ranchi"
  };
  var res = utils.setName(user, "Aditya Kumar");

expect(user).toInclude({
  firstName : "Aditya",
  lastName : "Kumar"
});
  // expect(user).toEqual(res);
});
