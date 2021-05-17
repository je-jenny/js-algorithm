/**
 * https://programmers.co.kr/learn/courses/30/lessons/42586
 * @param progresses 진도율
 * @param speeds 속도
 * @returns 배포되는 기능 수
 */
function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progresses, index) => Math.ceil((100 - progresses) / speeds[index]));
    while (progresses.length > 0) {
        progresses = progresses.map((value, i) => value + speeds[i]);
        let dist = 0;
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            dist++;
        }
        if (dist > 0) answer.push(dist);
    }
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));