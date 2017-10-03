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
   response.setHeader('Content-Type', `${extensions[ext]}; charset=utf-8`);
   fs.readFile(file, (err, content) => {
     if (err) throw err;
     response.write(content);
     response.end();
   });
 };




let currentImage;

exports.upload = function(request, response) {
   console.log("Rozpoczynam obsługę żadania upload");
   // response.write("Rozpoczynam upload!");
   const form = new formidable.IncomingForm();
   form.parse(request, function(error, fields, files) {
      // console.log(fields);
      // console.log(files);
      console.log(files.upload.name);
      currentImage = "img/" + files.upload.name;
      fs.renameSync(files.upload.path, currentImage);
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("Received image:<br>");
      response.write("<img src='/show'/>");
      response.end();
   });
};

exports.welcome = function(request, response) {
   console.log("Rozpoczynam obsługę żądania welcome");
   // response.write("Witaj na stronie startowej");
   // fs.readFile('templates/start.html', function(err, html) {
      // response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      // response.write(html);
      // response.end();
      responseWithFile(response, 'templates/start.html');
   // });
};

exports.show = function(request, response) {
   // fs.readFile(currentImage, "binary", function(error, file) {
      // response.writeHead(200, {"Content-Type": "image/png"});
      // response.write(file, "binary");
      // response.end();
      responseWithFile(response, currentImage);
   // });
};

exports.error = function(request, response) {
   console.log("Nie wiem co robić.".red);
   response.write("404 :(");
   response.end();
};