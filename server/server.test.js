const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe("Server", function(){

  describe("GET /", function(){

    it("should return hello world response", function(done){
      request(app)
        .get('/')
        .expect(200)
        .expect("<h1>Hello World</h1>")
        .end(done);
    });
  });

  describe("GET /users", function(){
    it("should return object correctly", function(done){
      request(app)
        .get('/users')
        .expect(200)
        .expect(function(res){
          expect(res.body).toInclude({
            name: "Aditya",
            age: 20
          });
        })
        .end(done);
    });
  });
});
