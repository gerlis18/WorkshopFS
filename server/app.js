var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pathToSwaggerUi = require('swagger-ui-dist').getAbsoluteFSPath();
const indexContent = fs.readFileSync(`${pathToSwaggerUi}/index.html`)
  .toString()
  .replace("https://petstore.swagger.io/v2/swagger.json", "http://localhost:3000/swagger/swagger.json");

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.get("/docs", (req, res) => res.send(indexContent));
app.use('/docs', express.static(pathToSwaggerUi));
indexRouter.initRoutes(app);

app.use(function(err, req, res, next) {
  //console.error(err.stack);
  if (err && err.errors) return res.status(400).send(err);

  res.status(500).json({
    msg: 'Ha ocurrido un error con el servidor',
    err,
  });
});


module.exports = app;
