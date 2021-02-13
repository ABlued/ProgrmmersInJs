const N = 4;
let stages = [1,1,1,1,2];
function solution(N, stages) {
    var answer = [];
    var sol = [];
    var answerCPY = [];
    let total = stages.length;
    for(let i = 1; i < N + 1; i++){
        let reached = 0;
        let count = stages.reduce((prev, curr)=>{
            if(curr == i){
                prev++,  reached--;
            }
            return prev;
        }, 0);
        total != 0 ? answer.push(count/total): answer.push(0);
        total += reached;
    }
    Object.assign(answerCPY, answer);
    answerCPY.sort((a,b) => b-a);
    for(let i = 0; i < answer.length; i++){
        const index = answer.indexOf(answerCPY[0]);
        sol.push(index + 1);
        answer.splice(index,1,null);
        answerCPY.shift();
    }
    return sol;
}
console.log(solution(N, stages));
//테스트 케이스
// assertArrayEquals(new int[] {3,4,2,1,5}, test.solution(5, new int[] {2, 1, 2, 6, 2, 4, 3, 3}));
// assertArrayEquals(new int[] {4,1,2,3}, test.solution(4, new int[] {4,4,4,4,4}));
// assertArrayEquals(new int[] {2,1,3,4}, test.solution(4, new int[] {1,1,1,1,2}));
// assertArrayEquals(new int[] {4,2,3,1}, test.solution(4, new int[] {3,2,5,4,2}));
// assertArrayEquals(new int[] {7,6,2,3,5,4,1}, test.solution(7, new int[] {2, 1, 2, 6, 2, 4, 3, 3,7,5}));
// assertArrayEquals(new int[] {1,2,3,4,5}, test.solution(5, new int[] {}));

//문제링크 : https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript