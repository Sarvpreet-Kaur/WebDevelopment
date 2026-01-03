// URL parsing

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'

// http = Protocol -> This tells the browser (or client) which protocol to use to access the resource.
// localhost = Host/Domain -> IP of the server.
// 8080 = Gate-> This specifies a specific "gate" or service on the server. Web servers typically use port 80 for HTTP and 443 for HTTPS.
// /default.htm = Resource Path -> This is the specific location of the resource (like a file) on the server. In this case, it's asking for a file named default.htm (or default.html) in the root directory of the server.
// ?year=2017&month=february = Query -> This is extra data sent to the server to provide specific instructions or filter results. It starts with a ? and contains key-value pairs separated by &.

var q = url.parse(adr,true);
console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2017&month=february' 

var qdata = q.query; // returns an object: {year:2017, month:february}
console.log(qdata.month); // returns 'february'