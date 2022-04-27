//Goorm Test 3

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mode = 0, T;
rl.on("line", function (line) {
    if (mode === 0) T = +line;
    else if (mode <= T) {
        const [N, M] = line.split(' ');
        console.log(couponToDrink(BigInt(N), BigInt(M)));
        if (mode === T) rl.close();
    }
    mode++;
}).on("close", function () {
    process.exit();
});

/**
 * 총 음료 쿠폰 12장(시즌 최소 5장) = 음료 1잔
 * @param {number} N 시즌 음료 쿠폰 수
 * @param {number} M 일반 음료 쿠폰 수
 */
const couponToDrink = (N, M) => {
    const a = ((N + M) / BigInt(12));
    const b = (N / BigInt(5));
    return parseInt(a > b ? b : a);
}



