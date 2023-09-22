// Path Modules

// Path.join() - give required path only

// Path.resolve() - give exact root path

const path = require('path')
const fs = require('fs')

const filePath = path.join('pathModules', 'path.js')

const filePathResolve = path.resolve('pathModules', 'path.js')

console.log(filePath)
console.log(filePathResolve)
console.log(path.extname(filePath))


fs.readFile('path.js', (err, data) => {
    if(err){
        // console.log(err)
        console.log("Error aagya Bro!!!!")
    } else {
        console.log(data.toString())
    }
})
