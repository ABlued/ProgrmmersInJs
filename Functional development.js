let progresses = [95,90,99,99,80,99];
let speeds = [1,1,1,1,1,1];

function solution(progresses, speeds){
    var answer = [];
    var isEnd = false;
    while(isEnd == false){
        isEnd = oneDay(progresses, speeds);
        let index = 0;
        while(progresses[0] > 99){
                progresses.shift();
                speeds.shift();
                index++;
        }   
        if(index != 0) answer.push(index);
    }    
    return answer;
}
function oneDay(progresses, speeds){
    for(let i = 0; i < progresses.length; i++){
        if(progresses[i] < 100)
            progresses[i] += speeds[i];
    }
    return progresses.every((point) => point > 99);
}
const result = solution(progresses, speeds);
console.log(result);