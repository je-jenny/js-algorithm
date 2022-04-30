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
        console.log(couponToDrink2(+N, +M));
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
    return Math.min(Math.floor((N + M) / 12), Math.floor(N / 5));
}

const MIN_SEASON = 5;
const ONE_DRINK = 12;
const DEFAULT_NEEDED = ONE_DRINK - MIN_SEASON;


const couponToDrink2 = (N, M) => {
    let possible = Math.floor(N / MIN_SEASON);
    N %= MIN_SEASON; //남은 시즌음료

    if (possible > 0) {
        let coupons = [], size = possible;
        while (size--) coupons.push(MIN_SEASON);
        let remainder = N + M;
        coupons.forEach((coupon, index) => {
            if (coupon < 5) return false; //시즌 쿠폰 부족
            else {
                if (remainder >= DEFAULT_NEEDED) {
                    remainder -= DEFAULT_NEEDED;
                    coupons[index] = ONE_DRINK;
                    return true;
                }
                coupon += remainder; //남은 쿠폰 붙이기
                remainder = 0;
                
                while (coupon < ONE_DRINK && index < (coupons.length - 1)) {
                    remainder = coupons.pop();
                    const needed = ONE_DRINK - coupon;
                    if (needed <= remainder) {
                        remainder -= needed;                        
                        if (remainder > 0) coupons.push(remainder);
                        coupon = ONE_DRINK;
                        break;
                    }
                }
                coupons[index] = coupon;
                if (coupon === ONE_DRINK) return true;
                else return false;
            }
        });
        const result = coupons.findIndex(coupon => coupon !== ONE_DRINK);
        return result > -1 ? result : coupons.length;
    }
    else return possible;
}