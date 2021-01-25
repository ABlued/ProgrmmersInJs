function solution() {
    var answer = '';
    const numbers = ["4","1","2"];
    let n = parseInt(prompt("자연수를 입력하세요"));
    let rest;
    while(n > 0){
        rest = parseInt(n % 3);
        n = parseInt(n/3);
        if(rest == 0) n--;
        answer = numbers[rest] + answer;
    }


    alert(answer);
    return answer;
}
solution();

// https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript