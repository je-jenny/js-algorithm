// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T, length, d, contact = [];
rl.on("line", function (line) {
    if (!T) {
        length = T = +line;
        d = Array(T);
        for (let i = 0; i < length; i++) contact[i] = 0;
    }
    else if (T-- > 0) {
        let [u, v, c] = line.split(' ');
        u = +u, v = +v, c = +c;
        if (!d[u]) d[u] = [];
        if (!d[v]) d[v] = [];
        d[u].push({ v: v, c });
        d[v].push({ v: u, c });
        contact[u]++;
    }
    if (T <= 1) {
        //To-do: get node
        // getShortest(2,3);
        const maxNode = Math.max(...contact);
        console.log(getLeastExpense(maxNode));
        rl.close();
    }
}).on("close", function () {
    process.exit();
});

const getLeastExpense = (max) => {
    let i = 0, least = 0;
    while (i < length) {
        // console.log('start node: ' + i);
        check = [];
        if (contact[i] === max) {
            dfs(i);
        }
        if (result.length > 0) {
            const sum = result.reduce((a, b) => a + b, 0);
            least = (least === 0 ? sum : Math.min(least, sum));
            result = [];
        }
        i++;
    }
    return least;
}

let check = [], result = [];
const dfs = (node, sum = 0) => {
    // stack.push(node);
    // for (let i = 0; i < length; i++) {
    //     // if (i !== node && )
    // }
    check[node] = 1;
    // console.log('node: ' + node);
    let size = d[node].length;
    for (let i = 0; i < size; i++) {
        let { v, c } = d[node][i];
        if (!check[v]) {
            dfs(v, sum + c);
        }
        if ((i === size - 1)) {
            result.push(sum);
            // console.log('finish node: ' + node + ' sum: ' + sum, result);
        }
    }
}

// const getLeastExpense = (least = 0) => {
//     for (let i = 0; i < length; i++) {
//         let expense = 0;
//         for (let j = 0; j < length; j++) {
//             if (i !== j) {
//                 if (d[i][j] === 0) getShortest(i, j);
//                 expense += d[i][j];
//             }
//         }
//         least = (least === 0 ? expense : Math.min(least, expense));
//     }
//     return least;
// }

// const getShortest = (start, end, sum = 0, check = Array(length)) => {
//     check[start] = 1;        
//     if (d[start][end] > 0 || start === end) {
//         if (d[start][end] > 0) sum += d[start][end];
//         if (shortest === 0) shortest = sum;
//         else shortest = Math.min(shortest, sum);
//         return;
//     }

//     for (let i = 0; i < length; i++) {
//         if (d[start][i] > 0 && !check[i]) {
//             getShortest(i, end, sum + d[start][i], check);
//         }
//     }
// }

// const getShortest = (start, end, visited = [], sum = 0, n = start) => {
//     //console.log(start + ' ' + end + ' ' + sum);
//     visited[start] = 1;
//     if (start === end) {
//         d[n][end] = d[end][n] = sum;
//         return;
//     }    
//     for (let i = 0; i < length; i++) {
//         if (d[start][i] > 0 && !visited[i]) {
//             if (d[n][end] === 0 || (sum + d[start][i] < d[n][end])) {
//                 getShortest(i, end, visited, sum + d[start][i], n);
//             }
//         }
//     }
// }

// Array.matrix = function (m, initial) {
//     var a, i, j, mat = [];
//     for (i = 0; i < m; i += 1) {
//         a = [];
//         for (j = 0; j < m; j += 1) {
//             a[j] = initial;
//         }
//         mat[i] = a;
//     }
//     return mat;
// };