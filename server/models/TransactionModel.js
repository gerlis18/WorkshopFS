var GenerateSchema = require('generate-schema');
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  referenceCode: { type: String, required: true },
  ipAddress: { type: String, required: [true, 'el ip es requerido'] },
  /*"redirectUrl": "https://yourhost.com/redirect",
  "confirmUrl": "https://yourhost.com/confirm",
  "payment": {
    "value": 105000,
    "description": "Compra de tiquetes"
  },
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "documentType": "CC",
    "documentNumber": "123456789",
    "email": "johndoe@mail.com",
    "cellPhone": "3001234567"
  },
  "travel": {
    "origin": "Cartagena",
    "destination": "Bogotá",
    "type": "Tiquetes"
  }*/
})

module.exports = mongoose.model('Payment', schema);