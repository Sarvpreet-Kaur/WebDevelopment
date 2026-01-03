var http = require('http');
var fs = require('fs');
http.createServer(function (req, res){
    fs.readFileSync('abc.txt', function(err, data){
        res.writeHead(200, {'content-type' : 'text/html'});
        //res.write(data);
        res.write('hello')
        res.end();
    })
}).listen(8090);

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     try {
//         var data = fs.readFileSync('abc.txt');
//         res.write(data);
//     } catch (err) {
//         res.write('Error reading file');
//     }
//     res.end();
// }).listen(8090);

