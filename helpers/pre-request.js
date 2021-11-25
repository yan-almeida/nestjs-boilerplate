'use strict';
var Faker = require('faker-br');
const { kinships } = require('./constants');

module.exports = {
  generateRandomPayload,
  printStatus,
  generateRandomUser,
  generateDeliveryRequest
};

function printStatus (requestParams, response, context, ee, next) {
  console.log(JSON.parse(response.body), response.statusCode);
  return next();
}

function generateRandomPayload (userContext, events, done) {
  var payload = {
    "username": "0000000000",
    "password": "teste"
  };

  // payload.Email =  Faker.internet.exampleEmail();  
  userContext.vars.payload = payload;
  return done();
}


function generateRandomUser (userContext, events, done) {
  var payload = {
  "fullName": "Jivanildo Barros",
  "email": "Tabajara59@bol.com.br",
  "phoneNumber": "(45) 3355-9668",
  "address": "1252 Pereira Avenida - Maranhão",
  "role": "USER",
  "password": "HkUKVHfN5TBYGL3"
}

  payload.fullName = Faker.name.findName(); 
  payload.email = Faker.internet.email();
  payload.phoneNumber = Faker.phone.phoneNumber();
  payload.password = 'teste123'; 

  userContext.vars.payload = payload;
  return done();
}
