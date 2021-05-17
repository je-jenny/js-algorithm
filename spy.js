
/**
 * https://programmers.co.kr/learn/courses/30/lessons/42578
 * 
 * @param {array} clothes 
 * @returns 
 */

function solution(clothes) {
    let newMap = new Map(), arrClothes = [];
    clothes.forEach(value => newMap.set(value[1], (newMap.get(value[1]) | 0) + 1));
    newMap.forEach(value => arrClothes.push(value));
    let sum = 0;
    arrClothes.forEach(value => {
        const arrCombi = combination(arrClothes, value);
        console.log(arrCombi);
    });
    console.log(sum);
    return sum;
}
function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
        const fixed = v;
        const restArr = arr.slice(idx + 1); //idx+1 ~ last
        const combinationArr = combination(restArr, selectNum - 1);
        const combineFix = combinationArr.map((v) => [fixed, ...v]);
        result.push(...combineFix);
    });
    return result;
}
solution([["yellowhat", "headgear"], ["bluepants", "pants"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])