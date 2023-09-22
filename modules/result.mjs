// Every file in JS is treated as Module

// ================== ES6 Module Start ===========================================================================


// import * as arithmeticModule from './arithmetic.mjs';

// console.log(arithmeticModule.sum(10,20));
// console.log(arithmeticModule.num);



// ================== // Way 2 // ===========================================================================



// import {sum, num}  from './arithmetic.mjs';

// console.log(sum(20,20));
// console.log(num);



// ================== // Tree Shaking Method // ===========================================================================


// Importing everything using * and using only some functions. So when we deploy our application it will TREE SHAKE means it will remove other funtions which we are not using and making our file or application light weight on our production environments.


// Benefits of ES6 Module :- Improve Readability, Optimization where unused imports are removed on our production builts.

// Production Built is deployed application of production environment which developers gives to client.




// ================== // Types of Modules // ===========================================================================

// 1. User Defined Module or Internal Modules :- Modules that are created or imported by developers/users and we use it 1st.

// 2. Node JS Core Modules :- Module that are imported by us and exported by NodeJS. eg: http, serviceRequire , etc.






// ================== // Package Manager and NPM // ===========================================================================

// Third party modules that manages package 

// Roles :- Installation Of Packages + Version Management + Managing Dependencies + Publishing Packages 


// Default Package Manager :- npm ( Node Package Manager )


// Nodemon :- Simple Monitor Script for use during development of a NodeJS app.  Third party package coming from npm.  

// Install globally :- sudo npm i -g nodemon

