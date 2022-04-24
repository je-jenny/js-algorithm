// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

/*
function biggerIsGreater(w) {
    // Write your code here
    const lengW = w.length;
    let smallest;
    for (let i = 0; i < lengW - 1; i++) {
        for (let j = i + 1; j < lengW; j++) {
            let arrayW = w.split('');
            const current = arrayW[i];
            arrayW[i] = arrayW[j];
            arrayW[j] = current;
            const tempW = arrayW.join('');
            if (w < tempW) {
                if (!smallest) smallest = tempW;
                else if (smallest > tempW) smallest = tempW;
            }
        }
    }
    return smallest ? smallest : 'no answer';
}*/

function biggerIsGreater(w) {
    const lengW = w.length;
    if (lengW > 1) {
        for (let i = lengW - 2; i >= 0; i--) {
            const prefix = w.substr(0, i);
            const compare = w[i];
            const remainder = w.substr(i).split('').sort((a, b) => b.localeCompare(a));
            if (remainder[0] !== compare) {
                const nextNum = remainder.indexOf(compare) - 1;
                const next = remainder[nextNum];
                remainder[nextNum] = '';
                const result = prefix + next + remainder.sort().join('');
                if (w < result) return result;
            }
        }
    }
    return 'no answer';
}


// zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgwm
// zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgwm

// biggerIsGreater('abcd');
// biggerIsGreater('dkhc');
// biggerIsGreater('aca');

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const T = parseInt(readLine().trim(), 10);

//     console.log(T);
//     for (let TItr = 0; TItr < T; TItr++) {
//         const w = readLine();

//         const result = biggerIsGreater(w);

//         ws.write(result + '\n');
//     }

//     ws.end();
// }
