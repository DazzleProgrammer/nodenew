// console.log("Hello Dazzle");


// Blocking and Non Blocking Operations

// Blocking Operation

// for (let i = 0; i < 10000000000; i++){
//     // Hehe! I am just consuming your time doing nothing ;)
// }
// console.log('Task to be performed after too long');

// console.log('Shit!!! I have to wait for this long loop to finish :(')


// Non Blocking Operation

setTimeout(() => { console.log('Task to be performed after 5 seconds'); } ,  5000 );

console.log('Yay!! now i do not have to wait so long');  


