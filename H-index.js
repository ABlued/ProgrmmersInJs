// 문제링크 : https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
  citations.sort((a, b) => b - a);
  console.log(citations);
  let i = 0;
  while (i + 1 <= citations[i]) i++;
  return i;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([1, 2, 3, 4, 5])); // 3
console.log(solution([1, 1, 1, 1, 1])); // 1
console.log(solution([1, 1, 1, 1, 1, 0, 0])); // 1
console.log(solution([0])); // 0
console.log(solution([0, 0, 0, 0, 0, 0])); // 0
console.log(solution([0, 0, 0, 0, 0, 3])); // 1
console.log(solution([0, 0, 0, 0, 0, 3, 4, 4])); // 3
console.log(solution([1, 1000])); // 1
console.log(solution([1, 2])); // 1
console.log(solution([999, 1000])); // 2
