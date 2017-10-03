const http = require('http');
const colors = require('colors');
const handlers = require('./handlers');

function start () {
  function onRequest (request, response) {
    console.log('Odebrano zapytanie.');
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // response.write("Pierwsze koty za płoty")
    // response.end()

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
      default:
         handlers.error(request, response);
    }
  }

  http.createServer(onRequest).listen(9000);
  console.log('Uruchomione serwer!'.green);
}

exports.start = start;
