
function solution(lines) {
    var answer = 0;
    let arr = [];
    const size = lines.length;
    for (let i = 0; i < size; i++) {
        let [date, time, due] = lines.shift().split(" ");
        due = +due.replace('s', '');
        const responseTime = Date.parse(date + ' ' + time);
        const requestTime = responseTime - due * 1000 + 1;
        // console.log(requestTime, new Date(responseTime), due); 
        arr.push({ req: requestTime, res: responseTime, due: due });
    }
    arr.sort((a, b) => { return a.req - b.req });
    arr.forEach((log, index) => {
        const before = log.req - 1000;
        const after = log.req + 1000;
        let traffic = 1, request = [];
        for (let i = 0; i < size; i++) {
            if ((i < index) && (arr[i].res > before)) traffic++;
            if ((i === index) || i === size - 1) { 
                answer = Math.max(traffic, answer);
                traffic = 0;
            }
            if ((i > index) && (arr[i].req < after)) traffic++;
        }
        // const dueTime = log.req + 1000; //탐색 기준
        // let traffic = 1, request = [];
        // for (let i = 0; i < size; i++) {
        //     if (i === index) continue;
        //     if (((i > index) && (arr[i].req < dueTime)) 
        //     || ((i < index) && (arr[i].res >= log.req))) {
        //         traffic++;
        //         request.push(i);
        //     }
        //     //if (arr[i].req > log.res) break;
        // }
        //console.log(index, request, traffic);
        //answer = Math.max(traffic, answer);
    })
    return answer;
}

console.log(solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
]));


console.log(solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"]));