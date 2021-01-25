let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
function pull(board, index){
    for(var i = 0; i < board.length; i++){
        if(board[i][index] != 0){
            const pullElement = board[i][index];
            board[i][index] = 0;
            return pullElement;
        }  
    }
    return null;
}
function solution(board, moves){
    let ary = [];
    var answer = 0;
    for(value of moves){
        const pullElement = pull(board, value-1);
        if(ary[ary.length - 1] == pullElement){
            ary.pop();
            answer += 2;
        } else{
            if(pullElement != null){
                ary.push(pullElement);
                console.log(ary);
            }
        }
    }
    return answer;
}
console.log(board);
const answer = solution(board,moves);
console.log(board);


console.log(answer);

//https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript#