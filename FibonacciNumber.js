// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript
function solution(n) {
  let memo = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }
  return memo[n];
}

console.log(solution(3));
console.log(solution(5));
