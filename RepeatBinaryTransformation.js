// 문제링크 : https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

function solution(s) {
  let str = s;
  let answer = [0, 0];
  while (str !== '1') {
    const previousLength = str.length;
    str = str.split('0').join('');
    answer[1] += previousLength - str.length;
    str = str.length.toString(2);
    answer[0]++;
  }
  return answer;
}

console.log(solution('110010101001')); // [3,8]
console.log(solution('01110')); // [3,3]
console.log(solution('1111111')); // [4,1]
