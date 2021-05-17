
/** https://programmers.co.kr/learn/courses/30/lessons/42746
 * numbers (<1000)       return
 * [6, 10, 2]	        "6210"
 * [3, 30, 34, 5, 9]	"9534330"
 * @param numbers 
 */

function solution(numbers) {
    numbers.sort((a, b) => '' + a + b > '' + b + a ? -1 : 1);
    /* 아래 코드는 join 함수로 대체 */
    // let answer = '';
    // numbers.forEach(element => {
    //     answer += element;
    // });
    return BigInt(numbers.join('')).toString();
}

console.log( (solution([3, 30, 34, 5, 9])));
console.log( (solution([0, 0, 0])));
