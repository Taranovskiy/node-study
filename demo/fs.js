const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('--->>', 'Directory was make');
// });

const filePath = path.join(__dirname, 'test', 'test.txt');

// fs.writeFile(filePath, 'Hello, fs!', err => {
//   if (err) {
//     throw err;
//   }
//   console.log('--->>', 'File was make');
// });

// fs.appendFile(filePath, '\nHello, again!', err => {
//   if (err) {
//     throw err;
//   }
//   console.log('--->>', 'File was make');
// });

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }
  // const data = Buffer.from(content);
  console.log('content -->', content);
  // console.log('data -->', data.toString());
});