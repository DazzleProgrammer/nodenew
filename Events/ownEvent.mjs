
// first we make a class user then this user will have a function or method which create Post where it will take the content 

// const Events = require("events")   
// Error: require is not defined in ES module scope, you can use import instead  // isliye upper wala comment kiye 

import * as Events from 'events'

export class UserEvents extends Events.EventEmitter {
    //  event
    createPost(content){
        console.log('Post is created');
        this.emit("postCreated")
    }
}

// Error: Cannot use import statement outside a module   // Soln: use .mjs extention in ES6 module
// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.