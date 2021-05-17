
/**
 * https://programmers.co.kr/learn/courses/30/lessons/42747
 * 제한사항
 * 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
 * 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
 * 입출력 예
 * citations	return
 * [3, 0, 6, 1, 5]	3
 * @param citations 
 * @returns 
 */
function solution(citations) {
    citations.sort((a, b) => b - a);
    let i = citations[0];
    while(i) {
        citations.findIndex((h, index) => index + 1 >= i);
        i--;
    }
    const answer = citations[found];
    return answer < 0 ? 0 : answer;
}

console.log(solution([3, 0, 6, 1, 5, 4, 7, 8, 9]));
// console.log(solution([0,0,0,0,5]));
// console.log(solution([1]));