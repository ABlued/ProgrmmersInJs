let s = "ababcdcdababcdcd";
function solution(s) {
    let answer = s;
    let count = 0;
    while(s.length/2 > count){
        temp = compression(s, count++ + 1);
        if(temp.length < answer.length){
            answer = '';
            answer += temp;
        }
    }
    return answer.length;
}

function compression(s, dividedUnits){
    let answer = '';
    let temp = [];
    let i = 0;
    let index = 0;
    let count = 1;
    while(i < s.length){
        temp[index++] = s.substr(i, dividedUnits);
        i += dividedUnits;
    }

    for(let i = 0; i < temp.length; i++){
        if(temp[i] == temp[i + 1]){
            count++;
        }
        else if(count != 1){
            answer += count + `${temp[i]}`;
            count = 1; 
        }
        else{
            answer += `${temp[i]}`;
        }
    }
    return answer;
}
console.log(solution(s));

// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript