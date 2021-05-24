
/**
 * https://programmers.co.kr/learn/courses/30/lessons/42583
 * @param {Number} bridge_length 다리길이 (1~10000)
 * @param {Number} weight 다리가 버티는 무게 (1~10000)
 * @param {Array} truck_weights 트럭 무게 (1~weight, length:1~10000)
 * @returns 모든 트럭이 다리를 건너는 시간
 * 트럭은 1초에 1만큼 움직인다.
 */
function solution(bridge_length, weight, truck_weights) {
    let truck_on_bridge = [], curr_weight = 0;
    let curr_time = 0;
    while(truck_weights.length > 0) {
        if (truck_on_bridge.length >= bridge_length) {
            const crossed = truck_on_bridge.shift();
            curr_weight -= crossed;
        }        
        if (curr_weight + truck_weights[0] <= weight && truck_on_bridge.length < bridge_length) {
            const crossing = truck_weights.shift();
            truck_on_bridge.push(crossing);
            curr_weight += crossing;
        }
        else {
            truck_on_bridge.push(0);
        }        
        if (truck_weights.length == 0) {
            curr_time += bridge_length;
        }        
        curr_time++;        
    }
    return curr_time;
}

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));
