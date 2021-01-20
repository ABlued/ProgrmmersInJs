init();

function init(){
    var ins = new Array(0,0,1,2,0,2,3,1,3,4,4);
    var out = solution(ins);

    console.log(out);
}

function solution(arr){
    var answer = [];   
    var index = 0;
    answer.push(arr[0]);

    for(var i = 1; i < arr.length; i++){
        if(arr[i] == answer[index]){
            continue;
        }
        else{
            answer.push(arr[i]);
            index++;
        }
    }
    return answer;
}

// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/12906?language=java