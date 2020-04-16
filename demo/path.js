const path = require('path');

console.log('Filename -->', path.basename(__filename));
console.log('Dirname -->', path.dirname(__filename));
console.log('Extension name -->', path.extname(__filename));
console.log('Parse -->', path.parse(__filename));
console.log('join -->', path.join(__dirname, 'server', 'index.html'));