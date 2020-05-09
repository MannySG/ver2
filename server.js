/**
 * @author ManhNV
 * @description config express application
 * @version 1.0
 */
'use strict';

require('rootpath')();
let express = require('express');
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');
let path = require('path');
let morgan = require('morgan');
let compression = require('compression');
let fs = require('fs');
let helmet = require('helmet');

let app = express();
app.use(helmet());
const node_env = global.process.env.NODE_ENV || 'production';

if (node_env === "development") {
  app.use(morgan('dev'));
}
if (node_env === "production") {
  // app.use(morgan('combined'));
}

app.use(compression()); // enable gzip
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));

//for static file
app.use('/.well-known/acme-challenge/22vNYQbEKGZ4fLlFudqW6F_ZnIq0ugg8fTz3WQGhVzE', function (req, res) {
  res.sendFile(path.join(__dirname, '.well-known/acme-challenge/22vNYQbEKGZ4fLlFudqW6F_ZnIq0ugg8fTz3WQGhVzE'));
});
app.use('/.well-known/acme-challenge/MSTOP64VmJX993zA5jPjVtvKetC6zJpWvvUMCwlbZIM', function (req, res) {
  res.sendFile(path.join(__dirname, '.well-known/acme-challenge/MSTOP64VmJX993zA5jPjVtvKetC6zJpWvvUMCwlbZIM'));
});
app.use('/', express.static(path.join(__dirname, 'build')));
app.use('/*', express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use(favicon(path.join(__dirname, 'client/dist/favicon.ico')));
//for JWT auth to secure the session

const port = global.process.env['PORT'] || 8383;
let server = app.listen(port, () => {
  console.log(`App running port: ${port}`);
});

module.exports = server;
