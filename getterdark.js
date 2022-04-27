const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let mode = 0;
let N, K;
rl.on("line", function(line) {
    const inputArray = line.split(" ");
	if(mode === 0) {
        N = inputArray[0];
        K = inputArray[1];        
    }
    else {
        console.log(pick(N, K, inputArray));
        rl.close();
    }
    mode++;
}).on("close", function() {
	process.exit();
});

const pick = (N, K, permutation) => {
    let index = 0, result = 0;

    if (N === K) return 1;
    while(index < N - 1) {
        index += K - 1;
        result++;
        //console.log(`index: ${index}, value: ${permutation[index]}`);
    }    
    return result;
}

// 4 3
// 2 3 1 4
// 2

// 9 3
// 7 3 1 8 4 6 2 5 9
// 4

// 37 4
// 31 36 20 30 1 9 6 13 3 29 11 25 7 8 2 24 34 18 26 15 23 28 37 19 21 4 32 14 16 10 12 27 22 35 5 17 33
// 12

// 5 3
// 1 2 3 4 5
// 1
