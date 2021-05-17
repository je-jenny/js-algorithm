
/**
 * https://programmers.co.kr/learn/courses/30/lessons/42747
 * 
 * n편 중 h번 인용 이상인 논문이 h편 이상
 * 나머지 논문이 h번 이하 인용
 * h 최대값 --> h-index
 * 
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
    var i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }
    return i;
}
//console.log(solution([4,4,4]))
console.log(solution([6,5,4,1,0]))
//console.log(solution([3, 0, 6, 1, 5, 4, 7, 8, 9]));
// console.log(solution([0,0,0,0]));
//console.log(solution([1]));
