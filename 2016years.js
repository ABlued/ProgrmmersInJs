const weeks = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
const months = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
function solution(a,b){
    const answer = (months[--a] + b) % 7;
    switch(answer){
        case 0 :
            return weeks[0];
        case 1 :
            return weeks[1];
        case 2 :
            return weeks[2];
        case 3 :
            return weeks[3];
        case 4 :
            return weeks[4];
        case 5 :
            return weeks[5];
        case 6 :
            return weeks[6];
    }
    
}

console.log(solution(2,1));

//https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript