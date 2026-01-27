const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.readFile("abc.txt", "utf8", (err, data) => {
        // Write the same data into file.txt
        fs.writeFile("file.txt", data, (err) => {
        // if (err) {
        //     res.writeHead(500, { "Content-Type": "text/plain" });
        //     res.end("Error writing to file.txt");
        //     return;
        // }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
        });
    });
    

}).listen(3000);
