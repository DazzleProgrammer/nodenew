
const fs = require("fs")


// 1. Creating and Writing a file 

/*
try{
      fs.writeFileSync('async.js', "Hii")
}

catch(err){
    console.log(err)
}
*/



// 2. Reading 

/*

console.log("Starting to read");
const buffer = fs.readFileSync('emp.txt', {encoding: 'utf8'})

console.log(buffer)

console.log("This is another operation")

*/


// 3. Updating or Append 

/*

console.log("Starting to update the file")

fs.appendFileSync('emp.txt',' \n Name: Dazzle Programmer')

console.log("This is another operation")

*/


// 4. Delete

/*

console.log("Deleting the file")

fs.unlinkSync('ssss.txt')

console.log("This is another operation")

*/

// For Errors 

/*

try{
    fs.unlinkSync('ssss.txt')
}

catch(err){
    console.log("File not found")
}

console.log("This is another operation")

*/