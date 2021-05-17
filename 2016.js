// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(' ');

// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

// console.log(a+b);

/**
 * 
 * @param {Number} a Month 
 * @param {Number} b Day
 * @returns 
 */
function solution(a, b) {
    const dayOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];   
    const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//윤년
    
    var answer = '';
    let days = 0;
    for (var i = 0; i < a - 1; i++) {
        days += daysOfMonth[i];
    }
    days += b;
    days = days % 7 - 1;
    answer = days < 2 ? dayOfWeek[5 + days] : dayOfWeek[days - 2];

    return answer;
}
console.log(solution(5,24));