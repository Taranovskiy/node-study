const os = require('os');

console.log('OS -->', os.platform());

console.log('Arch -->', os.arch());

console.log('CP info -->', os.cpus());

console.log('Free memory -->', os.freemem());

console.log('Total memory -->', os.totalmem());

console.log('Home directory -->', os.homedir());

console.log('Uptime system -->', os.uptime());