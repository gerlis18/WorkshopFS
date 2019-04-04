const TransactionModel = require('../models/TransactionModel');

function createTransaction(req, res, next) {
  let newModel = new TransactionModel({
    username: "comercio1",
    password: "passwordComercio1",
    referenceCode: "REF_PAYMENT_1"
  });
  newModel.save()
    .then(() => {
      res.status(200).json({
        msg: 'creado correctamente'
      });
    }).catch(error => next(error))
}

function getByReferenceCode(req, res) {
  res.send('hola');
}

function getByTransactionId(req, res) {
  res.send('hola');
}

module.exports = {
  createTransaction,
  getByReferenceCode,
  getByTransactionId
}