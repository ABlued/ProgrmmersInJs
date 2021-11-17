// 문제링크 : https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
function solution(s) {
  let stack = [];
  for (let char of s) {
    if (char === '(') {
      stack.push('(');
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
