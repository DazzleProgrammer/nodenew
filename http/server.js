// Create server using node 

// 1. Import http library/module

// require('http');
//  in require function we have to mention whatever library or module we want to import like here we want to import http module.

// so this require function is going to return that module that could be anything so whatever it is going to return i am going to store that in a variable with same name. 

const http = require('http');  // so here we are importing http and storing in variable http.


// 2. Create Server : createServer is a method 

const server = http.createServer((req, res)=>{
    console.log(req.url);
   
    res.write("Welcome to my application. ");


    // responce for different pages

    if(req.url=="/product"){
       return res.end("This is Product Page");
    }
    else if(req.url=="/user"){
        res.end("This is User Page");
    }

    // here comes the request
    res.end("Welcome to NodeJS Dazzle Server");
});


// 3. Specify a Port to listen to client's request.
server.listen(3100, ()=>{
    console.log("Port is listening on port 3100");
});

// Here we are telling that this server is available to listen to request on port 3100

// console.log("Port is listening on port 3100");