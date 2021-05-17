//https://programmers.co.kr/learn/courses/30/lessons/42748
const array = [1, 2];
// const i = 2;
// const j = 5;
// const k = 3;

function solution(array, commands) {
    return commands.map(command => {
        let [i, j, k] = command;
        let newArray = array.filter((value, index) => (index >= i - 1) && (index < j)).sort((a, b) => a - b);
        return newArray[k - 1];
    });
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));