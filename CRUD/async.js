 const { isUtf8 } = require('buffer')
const fs = require('fs')

// 1. Create 


/*

fs.writeFile('emp.txt','New file', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File created")
    }
})

console.log("This is another operation")

*/


// 2. Reading 

/*

fs.readFile('emp.txt',{encoding: 'utf8'},(err, data) => {
    if(err){
        console.log(err)
    }else{
        // console.log(data.toString)

        console.log(data)
    }
})

console.log("This is another operation")

*/



// 3. Update 

// fs.appendFile(path, data, options, callbacks)

/*

fs.appendFile('emp.txt', '\nHello World', (err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Updated the file")
    }
})

console.log("This is another operation")

*/



// 4. Delete 


// fs.unlink(path, callbacks)

/*

fs.unlink('ss.txt', (err)=> {
    if(err){
        console.log(err)
    } else {
        console.log("Deleted the file")
    }
})

console.log("This is another operation")

*/