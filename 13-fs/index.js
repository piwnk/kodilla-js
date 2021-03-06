var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

const printImageProperties = () => {
  fs.stat('./img/cat.jpg', function (err, stats) {
    if (err) throw err;
    var statMode = new StatMode(stats);
    console.log(stats);
    console.log(statMode.toString());
  });
};

const readWriteTextFile = () => {
  fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });

  fs.writeFile('./tekst.txt', 'Tekst, który.txt', function (err) {
    if (err) throw err;
    console.log('Udało się!');
  });
};

const appendTextToFile = () => {
  fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log('Dane przed zapisaem');
    console.log(data.blue);
    // fs.writeFile('./tekst.txt', 'A tak wyglądają dane po zapisie', function (err) {
    fs.appendFile('./tekst.txt', '\nA tak wyglądają dane po zapisie', function (err) {
      if (err) throw err;
      // fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
      fs.readFile('./tekst.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('Dane po zapisie');
        console.log(data.red);
      });
    });
  });
};

const readDirectory = () => {
  fs.readdir('./', (err, files) => {
    console.log(files);
    fs.writeFile('./directoryContent.txt', files.join('\n'), function (err) {
      if (err) throw err;
    });
  });
};

// printImageProperties()
// readWriteTextFile()
// appendTextToFile()
readDirectory();
