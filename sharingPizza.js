import { assertInputs } from './util.js';

const input = [
  { params: 7, answer: 1 },
  { params: 1, answer: 1 },
  { params: 15, answer: 3 },
  { params: 15, answer: 4 },
];

assertInputs(input, solution);

function solution(n) {
  return Math.ceil(n / 7);
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120814
