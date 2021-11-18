// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

function solution(s) {
  const stringArray = s.substring(2, s.length - 2).split('},{');
  let charArray = [];
  let result = [];
  let set = new Set();
  for (let i = 0; i < stringArray.length; i++) {
    charArray.push(stringArray[i].split(','));
  }
  const sortingCharArray = charArray.sort((a, b) => a.length - b.length);
  for (let i = 0; i < sortingCharArray.length; i++) {
    for (let j = 0; j < sortingCharArray[i].length; j++) {
      set.add(Number(sortingCharArray[i][j]));
    }
  }

  set.forEach((v) => {
    result.push(v);
  });
  return result;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{123}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));
