let dartResult = "1D2S#10S";

function solution(dartResult) {
    var answer = 0;
    let aryIndex = -1;
    let ary = [];
    let dartAry = dartResult.split('');
    console.log(dartAry);
    for(let i = 0; i < dartAry.length; i++){
        switch(dartAry[i]){
            case 'S':
                break;
            case 'D':
                ary = dou(ary, aryIndex);
                break;
            case 'T':
                ary = tri(ary, aryIndex);
                break;
            case '*':
                ary = star(ary, aryIndex);
                break;
            case '#':
                ary = shop(ary, aryIndex);
                break;
            default:
                if(parseInt(dartAry[i]) == 1){         //10인 경우
                    if(parseInt(dartAry[i + 1]) == 0){
                        ary.push(10);
                        i++;
                        aryIndex++;
                    }
                    else{                               //1인 경우
                        ary.push(1);
                        aryIndex++;
                    }
                } else {
                    ary.push(parseInt(dartAry[i]));
                    aryIndex++;
                }
            break;
        }
    }
    console.log(ary);
    for(element of ary){
        answer += element;
    }

    return answer;
}
function dou(ary, index){
    ary[index] *= ary[index];
    return ary;
}
function tri(ary, index){
    ary[index] *= ary[index] * ary[index];
    return ary;
}
function star(ary, index){
    if(index == 0){
        ary[index] *= 2;
        return ary
    }
    ary[index] *= 2;
    ary[index - 1] *= 2;
    return ary;
}
function shop(ary, index){
    ary[index] *= -1;
    return ary;
}
console.log(solution(dartResult));

//https://programmers.co.kr/learn/courses/30/lessons/17682