const fs = require('fs');
const formidable = require('formidable');

const extensions = {
  'jpg': 'image/jpeg',
  'css': 'text/css',
  'html': 'text/html',
  'js': 'text/javascript'
};

const responseWithFile = (response, file) => {
  const ext = file.split('.').slice(-1)[0];
  // console.log(ext);
  response.setHeader('Content-Type', `${extensions[ext]}; charset=utf-8`);
  console.log(response._headers);
  fs.readFile(file, (err, content) => {
    if (err) throw err;
    response.write(content);
    response.end();
  });
};

let currentImage = './img/kot.jpg';

exports.upload = function (request, response) {
  console.log('Rozpoczynam obsługę żadania upload');
  const form = new formidable.IncomingForm();
  form.parse(request, function (error, fields, files) {
    fs.renameSync(files.upload.path, currentImage);
    responseWithFile(response, 'templates/upload.html');
  });
};

exports.welcome = function (request, response) {
  console.log('Rozpoczynam obsługę żądania welcome');
  responseWithFile(response, 'templates/start.html');
};

exports.show = function (request, response) {
  responseWithFile(response, currentImage);
};

exports.image = function (request, response) {
  console.log('Pliki pomocnicze (JPG, PNG)');
  responseWithFile(response, './' + request.url);
};

exports.css = function (request, response) {
  console.log('Pliki styli (CSS)');
  responseWithFile(response, './' + request.url);
};

exports.error = function (request, response) {
  console.log('Coś nie tak.'.red);
  responseWithFile(response, 'templates/error.html');
};
