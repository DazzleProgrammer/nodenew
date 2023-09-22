// ================== Common JS Module Start ===========================================================================


// ======================== // Way 1 // =====================================================================



// function sum(x,y){
//     return x + y;
// }


// module.exports = {
//     add: sum
// };



// function div(x,y){
//     return x / y;
// }



// module.exports = {
//     division: div,
// };


// Conclusion => { isme koi ekhi function call hota hai }




// ================== // Way 2 // ===========================================================================


// module.exports.sum = (x,y) => {
//    return x + y;
// };


// module.exports.div = (x,y) => {
//     return x / y;
//  };
 



// Conclusion => { isme koi bhi chiz call krsakte h function, property kuch bhi  }




 // ================== // Way 3 // ===========================================================================


// exports.sum = (x,y) => {
//    return x + y;
// };


// exports.div = (x,y) => {
//     return x / y;
//  };


// Conclusion => { isme sirf function call krsakte h  }


// ================== Common JS Module End ===========================================================================

