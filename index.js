#!/usr/bin/env node

// const counterObject = require('./myscript.js');

// console.log(counterObject.getCounter()); 
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());

// const newCounterObject = require('./myscript. js'); 
// // file gets required only once, value gets thrown into the require cache and the same value gets exported again

// console.log(newCounterObject.getCounter());


const fs = require('fs');
const util = require('util');

// Method #2  (promisify function)
// const lstat = util.promisify(fs.lstat);

// Method #3 (promise based implementation)
const { lstat } = fs.promises;

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }

});


// Method #1 (writing function manually)
// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 reject(err);
//             }

//             resolve(stats);
//         });
//     }); 
// };