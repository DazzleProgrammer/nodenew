// req.end() method : it completes and end your request response cycle and returns the request back to the client 
// req.write() method : it write the message but didn't ends the responce

const http = require("http")

const server = http.createServer((req, res) => {
    res.write(
        'This is coming from node js server.'
    );
    console.log(req.url);

    if(req.url == '/first') {
    //    return res.end('This is first response');
          res.end('This is first response');
    } else {
        res.end('This is default response');
    }
});

server.listen(3200, (req, res) => {
    console.log("server is listening on port 3200");
});