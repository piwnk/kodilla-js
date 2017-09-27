var os = require('os');
var colors = require('colors');
var TimeTools = require('./TimeTools');

function getOSinfo () {
  var release = os.release();
  var cpu = os.cpus()[0]['model'];
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  //   var type = os.type()
  //   if (type === 'Darwin') {
  //     type = 'OSX'
  //   } else if (type === 'Windows_NT') {
  //     type = 'Windows'
  //   }

  var type = os.type() === 'Darwin' ? 'OSX' :
    os.type() === 'Windows_NT' ? 'Windows' :
      os.type();

  console.log('System: '.grey, type);
  console.log('Release: '.red, release);
  console.log('CPU: '.blue + cpu);
//   console.log('Uptime: ~' + (uptime / 60).toFixed(0) + ' min');
  console.log('Uptime: '.green + TimeTools.print(uptime));
  console.log('User name: '.yellow, userInfo.username);
  console.log('Home dir: ', userInfo.homedir);
}

// getOSinfo();

exports.print = getOSinfo;
