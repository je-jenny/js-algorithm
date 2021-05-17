
/**
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 * 
 * @param {array} participant 
 * @param {array} completion 
 * @returns 
 */
function solution(participant, completion) {
    let compare = new Map();
    participant.forEach(value => {
        if (compare.has(value)) compare.set(value, compare.get(value) + 1);
        else compare.set(value, 1);
        compare.set(value, (compare.get(value) | 0) + 1)
    });
    completion.forEach(value => { compare.set(value, compare.get(value) - 1); });
    let iterator = compare.entries();
    let start = iterator.next();
    while (start.value[1] == 0) start = iterator.next();
    return start.value[0];
}

//best solution
// var solution = (participant, completion) => {
//     participant.find(name => !completion[name]--,
//         completion.map(name => {
//             completion[name] = (completion[name] | 0) + 1
//         })
//     );
// }
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
