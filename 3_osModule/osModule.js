const os = require("os");
// Common useful data in os module
// 1) userInfo method
console.log(os.userInfo()); // Gives info about current user
/*
    [Object: null prototype] {
    uid: -1,
    gid: -1,
    username: 'saiga',
    homedir: 'C:\\Users\\saiga',
    shell: null
    }
*/

// 2) upTime method
// This method return the system uptime which means : the total length of time a computer, system, or network service has been continuously running and available without a crash or restart
console.log(os.uptime());
// 202184.406 is my output

console.log("Platform:", os.platform()); // win32
/*
    A string representing the operating system platform Node.js was compiled for.

    Example:
    win32                        - Windows (yes, even 64-bit Windows shows win32)
    linux                        - Any Linux distribution (Ubuntu, Fedora, etc.)
    darwin                       - macOS
    aix, freebsd, openbsd, sunos - Other UNIX systems

    Note: It’s not literally the 32-bit Windows — it’s just the internal platform identifier used by Node.js
*/
console.log("Architecture:", os.arch()); // x64
/*
    The CPU architecture your system (and Node.js) is running on.

    x64	  - 64-bit architecture
    arm	  - ARM-based systems (e.g., Raspberry Pi)
    arm64 -	Apple M-series chips or ARM servers
    ia32  -	32-bit Intel architecture
*/
console.log("Free Memory:", os.freemem()); // 815775744
// The amount of free system memory in bytes (available RAM)

console.log("Total Memory:", os.totalmem()); // 8240046080
// The total amount of system memory (RAM) in bytes.

console.log(`OS Type is ${os.type()}`); // Windows_NT
/*
    A string representing the operating system name.

    Windows_NT - Windows
    Linux	   - Linux
    Darwin	   - macOS

    It’s similar to os.platform() but gives a more descriptive label (the official OS name).
*/
console.log(`OS release is ${os.release()}`); // 10.0.26200
//The version number of your operating system’s kernel.