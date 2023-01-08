import { assertInputs } from './util.js';

const inputs = [
  { params: '1 2 Z 3', answer: 4 },
  { params: '10 20 30 40', answer: 100 },
  { params: '10 Z 20 Z 1', answer: 1 },
  { params: '10 Z 20 Z', answer: 0 },
  { params: '-1 -2 -3 Z', answer: -3 },
];

assertInputs(solution, inputs);

function solution(s) {
  const expression = s.split(' ');

  while (expression.includes('Z')) {
    expression.splice(expression.indexOf('Z') - 1, 2);
  }

  return expression.reduce((acc, cur) => acc + Number(cur), 0);
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120853
