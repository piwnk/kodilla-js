var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
  // console.log('What do you want: ');
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();

    if (Object.keys(process).includes(instruction.slice(1, instruction.length))) {
      console.log(process[instruction]);
    } else {
      console.log('Not process key');
      switch (instruction) {

        case '/getOSinfo':
          OSinfo.print();
          break;

        case '/exitMe':
          process.stdout.write('Quiting app!\n');
          process.exit();

        default:
          process.stdout.write('Wrong instruction!\n');
      }
    }}
});
