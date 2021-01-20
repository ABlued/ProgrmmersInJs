const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];
const answer = solution(arr1,arr2);
function solution(arr1, arr2){
    var answer = [[]];
    for(let i = 0; i < arr1.length; i++){
        answer[i] = [];
        for(let j = 0; j < arr1[i].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return answer;
}

console.log(answer);
// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript