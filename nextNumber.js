import { assertInputs } from './util.js';
const inputs = [
  {
    params: [1, 2, 3, 4],
    answer: 5,
  },
  {
    params: [2, 4, 8],
    answer: 16,
  },
  {
    params: [-1, 1, -1, 1],
    answer: -1,
  },
  {
    params: [-100, 0, 100, 200],
    answer: 300,
  },
  {
    params: [0, 0, 0],
    answer: 0,
  },
];

function solution(common) {
  const lastValue = common[common.length - 1];
  if (common[1] - common[0] === common[2] - common[1])
    return lastValue + (common[1] - common[0]);
  return lastValue * (common[1] / common[0]);
}

assertInputs(solution, inputs);
// https://school.programmers.co.kr/learn/courses/30/lessons/120924
