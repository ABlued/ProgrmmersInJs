// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript
function solution(d, budget) {
  let sum = 0;
  let i;
  d.sort((a, b) => a - b);
  console.log(d);
  for (i = 0; i < d.length; i++) {
    sum += d[i];
    if (budget === sum) return i + 1;
    else if (budget < sum) return i;
  }
  return i;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
console.log(solution([5, 2, 7, 8], 10));
console.log(solution([1, 1, 1, 1, 1, 2, 4, 5], 10));
console.log(solution([1, 5, 114, 13, 13, 12], 10));
console.log(solution([5, 1, 7, 5], 1));
console.log(solution([1, 1, 1], 10));
