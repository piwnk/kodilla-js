const http = require('http');
const colors = require('colors');
const handlers = require('./handlers');

function start () {
  function onRequest (request, response) {
    console.log('Odebrano zapytanie.');
    console.log(request.url.green);
    switch (request.url) {
      case '/':
      case '/start':
        handlers.welcome(request, response);
        break;
      case '/upload':
        handlers.upload(request, response);
        break;
      case '/show':
        handlers.show(request, response);
        break;
      case (request.url.match(/(\.css|\.css.map)$/) ? request.url : false):
        console.log("That's a CSS, or CSS.MAP file".blue);
        handlers.css(request, response);
        break;      
      case (request.url.match(/(\.jpg|\.png)$/) ? request.url : false):
        console.log("That's a JPG or PNG file".blue); 
        handlers.image(request, response);
        break;
      default:
        handlers.error(request, response);
        break;
    }
  }

  http.createServer(onRequest).listen(9000);
  console.log('Uruchomione serwer!'.green);
}

exports.start = start;
