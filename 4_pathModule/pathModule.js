/*
    -> The path module helps you work with file and directory paths in a way that’s cross-platform (works on Windows, macOS, Linux).
    -> It’s useful for joining, resolving, and extracting parts of file paths.
*/
const path = require('path');
console.log(path.sep); // Gives our os file seperator indicator
console.log(path.join('1_Globals','globals.js')); // The join method has parameters Folder, SubFolder, File
console.log(path.resolve('1_Globals','globals.js')); // Gives full location of the file from the root path
console.log(path.basename('1_Globals/globals.js')); // Returns the file name
console.log(path.dirname('1_Globals/globals.js')) // Returns the directory name
console.log(path.extname('globals.js')); // Returns the extension