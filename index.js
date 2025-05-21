#!/usr/bin/env node

// const counterObject = require('./myscript.js');

// console.log(counterObject.getCounter()); 
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());

// const newCounterObject = require('./myscript. js'); 
// // file gets required only once, value gets thrown into the require cache and the same value gets exported again

// console.log(newCounterObject.getCounter());


const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }

    const allStats = Array(filenames.length).fill(null);

    for (let filename of filenames) {
        const index = filenames.indexOf(filename);

        fs.lstat(filename, (err, stats) => {
            if (err) {
                console.log(err);
            }       

        allStats[index] = stats;
        
        const ready = allStats.every((stats) => {
            return stats;
          });

          if (ready) {
            allStats.forEach((stats, index) => {
                console.log(filenames[index], stats.isFile());
            });
          }
        });
    }
});