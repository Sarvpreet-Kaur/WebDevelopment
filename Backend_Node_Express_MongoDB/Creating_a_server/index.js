const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === "/") res.end("WELCOME !!")
    else if(req.url === "/contact") res.end("CONTACT US !!")
    else{
        res.end("ERROR - NO PAGE FOUND")
    }
});

server.listen(5000, ()=>{
    console.log("Listening at 5000")
})