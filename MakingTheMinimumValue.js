// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12941?language=javascript

function solution(A, B) {
  const sortingA = A.sort((a, b) => a - b);
  const sortingB = B.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sortingA.length; i++) {
    sum += sortingA[i] * sortingB[sortingB.length - i - 1];
  }
  return sum;
}

console.log(solution([1, 4, 2, 11], [5, 4, 4, 12]));
console.log(solution([1, 2], [3, 4]));

// 이렇게 푸는 방법도 있다.
function otherSolution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
