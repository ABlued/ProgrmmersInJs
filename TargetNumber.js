// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
  let answer = 0;
  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
