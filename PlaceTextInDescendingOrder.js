let s = 'Zbcdefg';

function solution(s){
    return s.split('').sort().reverse().join('');
}

const answer = solution(s);
console.log(answer);