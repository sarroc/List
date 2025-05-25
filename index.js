#!/usr/bin/env node
// use file as executable ^


// const counterObject = require('./myscript.js');

// console.log(counterObject.getCounter()); 
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());

// const newCounterObject = require('./myscript. js'); 
// // file gets required only once, value gets thrown into the require cache and the same value gets exported again

// console.log(newCounterObject.getCounter());


// Modules used inside the Node.js library
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');


// Method #2  (promisify function)
//  const lstat = util.promisify(fs.lstat);


// Method #3 (Promise.all = best solution, no downsides as everything is executed simultaneously)
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        console.log(err);
    }
    const statPromises = filenames.map(filename =>{
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
        console.log(filenames[index]);
        } else {
          console.log(chalk.bold.magenta(filenames[index]));  
        }
    }
});


// Method #1 (writing function manually)
//  const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 reject(err);
//             }

//             resolve(stats);
//         });
//     }); 
// };


// Files UP one directory: ls ../
// Files FROM ROOT DIRECTORY ls /
// Files FROM HOME DIRECTORY ls ~/