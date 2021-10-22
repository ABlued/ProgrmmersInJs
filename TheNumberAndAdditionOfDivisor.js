// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/77884?language=javascript
function solution(left, right) {
  let answer = 0;
  for (let i = left; i < right + 1; i++) {
    const numberOfDivisor = getDivisor(i);
    if (numberOfDivisor % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}
function getDivisor(number) {
  let index = 1;
  let count = 0;
  while (index <= number) {
    if (number % index === 0) {
      count += 1;
    }
    index += 1;
  }
  return count;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
