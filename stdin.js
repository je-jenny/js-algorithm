const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    process.exit();
});

// (function () {
//     let inputLines = require("fs")
//         .readFileSync("/dev/stdin")
//         .toString()
//         .split("\n");
// })();
