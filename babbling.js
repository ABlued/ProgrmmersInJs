import { assertInputs } from './util.js';

const inputs = [
  { params: ['aya', 'yee', 'u', 'maa', 'wyeoo'], answer: 1 },
  { params: ['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'], answer: 3 },
  { params: ['aya', 'ye', 'woo', 'ma'], answer: 4 },
  { params: ['a'], answer: 0 },
  { params: ['ymaaee'], answer: 0 },
  { params: ['yeeyee'], answer: 0 },
  { params: ['ayayewooma'], answer: 1 },
];
assertInputs(solution, inputs);

function solution(babbling) {
  let result = 0;
  const possibleWord = ['aya', 'ye', 'woo', 'ma'];
  babbling.map((word) => {
    let findWord = '';
    for (let i = 0; i < possibleWord.length; i++) {
      if (word.includes(possibleWord[i])) {
        findWord += possibleWord[i];
      }
    }
    if (findWord.length === word.length && findWord.length <= 10) result++;
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120956
