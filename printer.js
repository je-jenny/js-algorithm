/**
 * https://programmers.co.kr/learn/courses/30/lessons/42587
 * @param priorities 중요도 (1~9)
 * @param location 인쇄를 요청한 문서의 위치 (0~99)
 * @returns 
 * 
 * priorities	    location	return
 * [2, 1, 3, 2]	        2	      1
 * [1, 1, 9, 1, 1, 1]	0	      5
 */
function solution(priorities, location) {    
    let picked = false, printed = 0;
    while(!picked) { //O(N)
        let J = priorities.shift(); //J를 꺼낸다. O(N)
        if (priorities.find(value => value > J) >= 0) { //J보다 중요도가 높은 문서가 하나라도 존재한다면 O(N)
            priorities.push(J); //O(1)
            if (location === 0) location = priorities.length - 1; //O(N)
            else location--;
        }
        else { //인쇄한다.
            printed++;
            if (location === 0) picked = true;
            else location--;
        }              
    }
    return printed;
}

//console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));