//https://programmers.co.kr/learn/courses/30/lessons/12919
/**
 * 
 * @param {Array} seoul 
 * @returns 
 */
function solution(seoul) {
    // var answer = '';
    // seoul.sort();
    // answer = binary_search(seoul);
    // return answer;
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

// async function binary_search(left, right, seoul) {
//     const center = parseInt((left + right)/2);
//     if (seoul[center] > Kim) {
//         await binary_search(left, center - 1, seoul);
//     }
//     else if (seoul[center] == Kim) {
//         return `김서방은 ${center}에 있다`;
//     }
//     else {
//         await binary_search(center, right, seoul);
//     }
// }

function binary_search(seoul, Kim = 'Kim') {
    let startIndex = 0;
    let lastIndex = seoul.length - 1;

    while (startIndex <= lastIndex) {
        const middleIndex = startIndex + Math.floor((lastIndex - startIndex) / 2);
        if (seoul[middleIndex] > Kim) {
            lastIndex = middleIndex - 1;
        }
        else if (seoul[middleIndex] == Kim) {
            return `김서방은 ${middleIndex}에 있다`;
        }
        else {
            startIndex = middleIndex + 1;
        }
    }
}

console.log(solution(['Jane', 'Jieun', 'Kim']));