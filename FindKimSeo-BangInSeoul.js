const seoul = ["jane","kim","sd"];

function solution(seoul) {
    
    let index = seoul.filter((v,i) => v == "Kim");
    return "김서방은 " + index + "에 있다";
}

const answer = solution(seoul);
console.log(answer);

//https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript

// function solution(seoul) {
//     return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
// } 
// 이런식으로 푸는게 더 깔끔하다.