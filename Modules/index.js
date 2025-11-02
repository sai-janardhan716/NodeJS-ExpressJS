/*
Modules in Node.js :-

What is a Module?
    -> A module in Node.js is just a file that contains code you can reuse.
    -> It helps keep code organized, clean, and modular — instead of writing everything in one file.

In Node.js, there are 3 types of modules:
    1. Core Modules -> built into Node.js (EG: fs, path, http, os, etc.)
    2. Local Modules -> your own files (like math.js, logger.js)
    3. Third-Party Modules -> installed via npm (like express, mongoose, etc.)
*/

// EG for Core Module : 'OS' module (Note:- In JS all core modules are by default imported)

// This 'OS' module used for extract your OS info
const os = require('os'); // require() is used for importing the module and store it in a variable in NodeJS using Common JS 
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

// EG for Local Module
const filesModule = require('./files');
filesModule.retriveFile("NodeJS Learning");
filesModule.addFile(7,"ExpressJS Learning","ExpressJS Full Content","Backend");
filesModule.retriveFile("ExpressJS Learning");

// EG for Third-Party Module
// Let’s use a popular npm package - chalk (for colorful console logs).
/*
    Step 1: Initialize npm
    npm init -y

    Step 2: Install chalk
    npm install chalk@4
*/

// Step 3: Use it
const chalk = require('chalk');
console.log(chalk.green("Success!"));
console.log(chalk.red("Error!"));
console.log(chalk.blue("Info Message"));