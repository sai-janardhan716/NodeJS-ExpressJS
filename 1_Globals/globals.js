/*
    -> In Node.js, globals are objects, variables, or functions that are available everywhere in your code - you don’t need to import or require them.
    -> They are similar to the window object in browsers, but Node.js has its own global context, since it doesn’t run in a browser.
    -> Globals in Node.js are built-in identifiers that can be accessed in any module without importing them.
    -> We should not create our own globals unnecessarily, because it will leads to problems in debugging.
*/

// Common Global Objects in NodeJS
/* 
    1) global
    The top-level global object in Node.js (like window in browsers). Any variable attached to it is accessible everywhere.

    2) process
    Provides information and control over the current Node.js process (like environment variables, exit codes, etc.).

    3) __dirname - Gives the path of directory of the current module file.
    4) __filename - Gives the full file path of the current module.
    5) module - Represents the current module (contains metadata about the file).
    6) exports - Used to export functions/objects from a module.
    7) require() - Function to import other modules.
    8) Buffer - Used to handle binary data (e.g., for file or network streams).
    9) setTimeout(), setInterval(), setImmediate()	
    Timer functions (like in browsers, but implemented by Node.js).
    
    10) clearTimeout(), clearInterval(), clearImmediate() - Stop timers.
*/

// Example of usages
console.log(__dirname);   // Path of current directory
console.log(__filename);  // Path of current file
console.log(process.platform);  // OS platform
console.log(process.env.NODE_ENV); // Environment variable
setTimeout(() => {
  console.log("Hello after 2 seconds!");
}, 2000);
global.myAppName = "IDEADSHIP";
console.log(global.myAppName); // Accessible everywhere