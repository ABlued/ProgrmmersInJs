const numbers = [3,30,34,9,5];
function solution(numbers) {
    
    var answer = numbers.map(c=> c + '').
    				sort((a,b) => (b+a) - (a+b)).join('');
    
    return answer[0]==='0'? '0' : answer;
}


console.log(solution(numbers));

//https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript