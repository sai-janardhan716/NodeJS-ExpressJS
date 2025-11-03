const fs = require("fs");
/*
    The 'fs' module allows you to interact with the file system:
    - Read / Write / Delete / Rename files
    - Create / Remove directories
    - Check if files or folders exist
    - Work in synchronous (blocking) or asynchronous (non-blocking) modes
*/
// 1) writeFileSync() - Synchronous file write
fs.writeFileSync("example1.txt", "Hello, this is written synchronously!");
/*
    1) Creates or overwrites the file "example1.txt" with given content.
    2) Default flag: 'w'  -> means "write", overwrites existing content.
    3) If file doesn’t exist, it will be created.
*/

// 2) writeFile() - Asynchronous file write
fs.writeFile("example2.txt", "Hello from async write!", (err) => {
  if (err) throw err;
  console.log("example2.txt created successfully (async)");
});
/*
    -> Same as writeFileSync but runs asynchronously (non-blocking).
    -> It takes a callback function that runs after writing is complete.
*/

// 3) appendFileSync() - Add data to end of file
fs.appendFileSync("example1.txt", "\nThis line was appended!");
/*
    -> Opens the file in append mode and adds content at the end.
    > If file doesn’t exist, it creates one.
*/

// 4) readFileSync() - Read file content (synchronous)
const data = fs.readFileSync("example1.txt", "utf8");
console.log("File content (sync):", data);
/*
    -> Reads file content.
    -> Second parameter ('utf8') tells Node to return text instead of raw bytes (Buffer).
    -> If you omit encoding, you’ll get a Buffer object.
*/

// 5) readFile() - Read file (asynchronous)
fs.readFile("example2.txt", "utf8", (err, content) => {
  if (err) throw err;
  console.log("File content (async):", content);
});
/*
    -> Asynchronous version.
    -> Does not block program execution while reading the file.
*/

// 6) existsSync() - Check if file or folder exists
console.log("Does example1.txt exist?", fs.existsSync("example1.txt"));
// Returns true or false based on whether the given file or directory exists.

//7) unlinkSync() - Delete file
fs.unlinkSync("example2.txt");
/*
    -> Deletes (removes) the specified file.
    -> Use carefully! It permanently deletes the file.
*/

// 8) mkdirSync() - Create directory
if (!fs.existsSync("myFolder")) {
  fs.mkdirSync("myFolder");
  console.log("Folder 'myFolder' created!");
}
/*
    -> Creates a new folder (directory).
    -> If folder already exists, it will throw an error (so we usually check first).
*/

// 9) readdirSync() - Read contents of a directory
const files = fs.readdirSync(__dirname);
console.log("Files in current directory:", files);
/*
    -> Returns an array containing names of files and folders inside the directory.
    -> __dirname gives the current folder path.
*/

// 10) renameSync() - Rename or move a file
fs.renameSync("example1.txt", "renamed.txt");
/*
    -> Renames or moves a file.
    -> Can also move file to another directory if full path is provided.
*/

// 11) statSync() - Get information about a file
const stats = fs.statSync("example1.txt");
console.log("File stats:", stats);
/*
    -> Returns file information such as:
    size, modified time, isFile(), isDirectory(), etc.

    Example Output:
    Stats {
    size: 123,
    birthtime: 2025-11-03T10:35:00.000Z,
    isFile: [Function: isFile],
    isDirectory: [Function: isDirectory]
    }
*/

// 12) openSync() and closeSync() - Low-level file operations
const fd = fs.openSync("example1.txt", "r");
console.log("File descriptor (fd):", fd);
fs.closeSync(fd);
/*
    -> Opens a file and returns a file descriptor (a number ID for the file).
    -> The second argument specifies the mode, e.g., "r" for read, "w" for write.
*/

// Common FILE OPEN FLAGS (important for writeFileSync)
/*
    -> Flags define how a file is opened or written.
    -> Below are the most commonly used ones:

    'w'  ->  Open file for writing. Create if not exists, overwrite if exists. (default)
    'a'  ->  Open file for appending. Create if not exists, add new content at end.
    'wx' ->  Write-only, fails if file already exists (safe write).
    'ax' ->  Append-only, fails if file already exists.
    'r'  ->  Read-only. Error if file doesn’t exist.
    'r+' ->  Read and write. File must exist.
    'w+' ->  Read and write. Overwrites file or creates new one.
    'a+' ->  Read and append. Creates file if not exists.
*/


// SUMMARY
/*
    +---------------------------------------------------------------------------+
    | CATEGORY     | METHOD                       | DESCRIPTION                 |
    |--------------+------------------------------+-----------------------------+
    | Write File   | writeFileSync(), writeFile() | Create or overwrite files   |
    | Append File  | appendFileSync()             | Add content to end of file  |
    | Read File    | readFileSync(), readFile()   | Read file content           |
    | Delete File  | unlinkSync()                 | Delete a file               |
    | Folder Ops   | mkdirSync(), readdirSync()   | Create or read directory    |
    | File Info    | statSync()                   | Get file metadata           |
    | Rename/Move  | renameSync()                 | Rename or move files        |
    | Flags        | {flag: 'w''a''wx''ax'}       | Control write behavior      |
    | Check Exists | existsSync()                 | Verify file/folder presence |
    +--------------+------------------------------+-----------------------------+
*/