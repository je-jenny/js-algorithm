/**
 * 0~n 사이의 숫자 k개를 조합하여 합이 n이 되는 경우의 수 구하기
 * DP[n][k]
 * DP[0][0] = 1
 * DP[n][1] = 1
 * 1 <= n <= 200, 1 <= k <= 200
 */


const PICK = [0, 1, 2, 4, 6];
let DP = [];

const getCaseNum = (n, k) => {
    DP = Array(n + 1);
    
    for (let i = 1; i <= n; i++) {
        DP[i] = Array(k + 1);
        if (PICK.indexOf(i) > -1) DP[i][1] = 1; //DP[n][1] = 1
    }

    // DP[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        
    }


}

getCaseNum(5, 5);