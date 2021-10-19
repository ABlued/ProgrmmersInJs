// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
function solution(priorities, location) {
  let minimumRanking = 1;
  while (priorities.length > 0) {
    let maxValue = Math.max(...priorities);

    for (let i = 0; i < priorities.length; i++) {
      if (priorities[0] === maxValue) {
        if (location !== 0) {
          minimumRanking++;
          location--;
        } else {
          return minimumRanking;
        }
        priorities.shift();
        maxValue = Math.max(...priorities);
      } else {
        priorities.push(priorities.shift());
        if (location === 0) location += priorities.length - 1;
        else location--;
      }
    }
  }

  return minimumRanking;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
