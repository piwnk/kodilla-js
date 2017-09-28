var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSInfo');

var emitter = new EventEmitter();

emitter.on('beforeCommand', function (instruction) {
  console.log('You wrote: ' + instruction + ', trying to run command');
});

emitter.on('afterCommand', function () {
  console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
  console.log('Write command with "/"');
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    emitter.emit('beforeCommand', instruction);

    instruction = instruction.slice(1, instruction.length);

    if (instruction === 'exit') {
      process.stdout.write('Quiting app!\n');
      process.exit();
    } else if (Object.keys(process).includes(instruction)) {
      var result = process[instruction];
      console.log(typeof(result));

      if (typeof(result) == 'function') {
        console.log(result = result());//JSON.stringify(result()));
      } else {
        console.log(process[instruction]);
      }
    } else {
      console.log('Not a process key');
      switch (instruction) {
        case '/getOSinfo':
          OSinfo.print();
          console.log('\n');
          break;

        default:
          process.stdout.write('Wrong instruction!\n');
      }
    }
    emitter.emit('afterCommand');
  }
});
