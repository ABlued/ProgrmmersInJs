const array = [1,5,2,6,3,7,4];
const commands = [[2,5,3],[4,4,1],[1,7,3],[2,2,1]];

function solution(array, commands){
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        let temp = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => a-b);
        answer.push(temp[commands[i][2]-1]);
        console.log(temp);
    }
    return answer;
}

const answer = solution(array, commands);
console.log(answer);
// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript