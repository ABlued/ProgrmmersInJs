export function assertInputs(solution, inputs) {
  inputs.map((input, i) => {
    console.assert(
      solution(input.params) === input.answer,
      `test ${i} 실패 answer ${solution(input.params)}`
    );
  });
}

export function assertInputsWithMultipleParameter(solution, inputs) {
  let answer = {};
  if (typeof inputs.answer === 'object') answer = JSON.stringify(inputs.answer);
  inputs.map((input, i) => {
    const result = JSON.stringify(solution.apply(null, input.params));
    console.assert(result === answer, `test ${i} 실패 result ${result}`);
  });
}
