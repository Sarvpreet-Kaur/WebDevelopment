var fs = require('fs');
var rs = fs.createReadStream('abc.txt');

rs.on('open', function(){
    console.log('File is open');
});