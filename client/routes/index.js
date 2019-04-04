var express = require('express');
var router = express.Router();
var tController = require('../services/Transaction');

module.exports.initRoutes = function initRoutes(app) {
  app.use('/', router.get('/', function(req, res, next) {
    res.send('hola');
  }));

  app.use('/api', router.post('/submitTransaction', tController.createTransaction));
}
