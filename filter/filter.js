const fs = require('fs');

function callback() {
    console.log('działa');
}

var obj = {
    table: []
 };
 
fs.readFile('./words1.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    fs.writeFile('myjsonfile.json', data, 'utf8', callback);
  });