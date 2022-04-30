// Run by Node.js

const readline = require("readline");
const { resourceLimits } = require("worker_threads");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let caseNum = BigInt(0);
rl.on("line", function (line) {
    let [N, K] = line.split(" ");
    N = +N;
    K = +K;
    //if (K === 1) console.log(0);
    //else console.log(1);
    calAnswer(N, K);
    console.log(Number(caseNum % BigInt(1000000007)));
    rl.close();
}).on("close", function () {
    process.exit();
});

/**
 * 
 * @param {array} 현재 카드 넘버
 * @param {number} K 선택 카드 개수
 * @param {number} selected 현재 선택된 카드 개수
 * @param {number} index 현재 선택한 카드
 * @param {number} sum 현재 선택된 카드의 합
 */
// const calAnswer = (N, K, selected = 0, index = 0, sum = 0) => {
//     console.log(`selected: ${selected}, i: ${index}, sum: ${sum}`);
//     if (selected === K) { //다 선택함
//         if (sum % N === 0) {
//             console.log('find!');
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     else {
//         for (let i = index; i < N; i++) {
//             if (calAnswer(N, K, selected + 1, i + 1, sum + i)) {
//                 caseNum++;
//                 break;            
//             }
//         }
//     }
// }

// const initArray = (N) => {
//     let d = Array(N);
//     for(let i = 0; i < N; i++) d[i] = 0;
//     return d;
// }

// const go = (N) => {
//     if (N === 0) return 1;
//     if (d[N] > 0) return d[N];
    
// }

// Array.matrix = function (m, n, initial) {
//     var a, i, j, mat = [];
//     for (i = 0; i < m; i += 1) {
//         a = [];
//         for (j = 0; j < n; j += 1) {
//             a[j] = initial;
//         }
//         mat[i] = a;
//     }
//     return mat;
// };
