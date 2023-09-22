// Events in Node JS 

// i) A click of button 
// ii) A change in data 
// iii) A change in file 

/*
 
Any action which is happening on our application is an event.

Node has several built-in events, such as :-

1) 'data' : Triggered when a readable stream receives new data 
2) 'error' : Fired when an error occurs in the application
3) 'listening' : Emitted when a server starts listening for incoming connections

Using events to read data on port request.

Data is send in chunks 

get request => Client needs to receive data from Server

post request => Client needs to send data to Server 

*/



// const http = require("http")

// const server = http.createServer((req, res) => {
//     res.end('Welcome to Get Request')
// })

// server.listen(3100)

// console.log("Server is listening on 3100")



// How to check whether this request is Post request or not ?


const http = require("http")

const server = http.createServer((req, res) => {

    if(req.method == 'POST'){
        console.log(req.body)
        // expecting data from client
        let body = ' '
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            console.log(body)
            res.end('Data is received')
        })
    } else {
        res.end('Welcome to node js')
    }

   

})
server.listen(3100)

console.log("Server is listening on 3100")