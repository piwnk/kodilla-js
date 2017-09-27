var EventEmitter = require("events").EventEmitter;
var OSinfo = require('./modules/OSInfo');


var emitter = new EventEmitter();

emitter.on("beforeCommand", function(instruction) {
  console.log('You wrote: ' + instruction + ', trying to run command');
});

emitter.on("afterCommand", function() {
  console.log("Finished command");
});



process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
  // console.log('What do you want: ');
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    emitter.emit('beforeCommand', instruction);

    if (Object.keys(process).includes(instruction.slice(1, instruction.length))) {
      console.log(process[instruction.slice(1, instruction.length)]);
    } else {
      console.log('Not process key');
      switch (instruction) {

        case '/getOSinfo':
          OSinfo.print();
          console.log("\n");
          break;

        case '/exitMe':
          process.stdout.write('Quiting app!\n');
          process.exit();

        default:
          process.stdout.write('Wrong instruction!\n');
      }
    }
    emitter.emit("afterCommand");
  }
});
