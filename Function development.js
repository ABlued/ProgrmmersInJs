// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
function solution(progresses, speeds) {
  let result = [];
  while (progresses.length !== 0) {
    let count = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    while (progresses[0] > 99) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count != 0) result.push(count);
  }
  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
