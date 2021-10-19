// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12973
function solution(s) {
  let stack = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const popValue = stack.pop();
    if (popValue === undefined) {
      stack.push(s[i]);
      continue;
    }
    if (popValue !== s[i]) stack.push(popValue, s[i]);
  }

  if (stack.length !== 0) return 0;
  return 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
