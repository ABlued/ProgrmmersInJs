import { assertInputsWithMultipleParameter } from './util.js';

const inputs = [
  {
    params: [[1, 2, 3, 4, 5, 6], 4],
    answer: [4, 5, 3, 6, 2, 1],
  },
  {
    params: [[10000, 20, 36, 47, 40, 6, 10, 7000], 30],
    answer: [36, 40, 20, 47, 10, 6, 7000, 10000],
  },
];

assertInputsWithMultipleParameter(solution, inputs);

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [absoluteA, absoluteB] = [Math.abs(a - n), Math.abs(b - n)];
    if (absoluteA !== absoluteB) return absoluteA - absoluteB;
    else return b - a;
  });
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120880
