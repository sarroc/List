// const counterObject = require('./myscript.js');

// console.log(counterObject.getCounter()); 
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());

// const newCounterObject = require('./myscript. js'); 
// // file gets required only once, value gets thrown into the require cache and the same value gets exported again

// console.log(newCounterObject.getCounter());

#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }

    console.log(filenames);
});