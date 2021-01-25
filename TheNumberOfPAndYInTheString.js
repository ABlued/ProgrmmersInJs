const s = "PY";
const parsedAry = s.split('');
const result = parsedAry.reduce((prev, curr) =>{
    if(curr == 'p' || curr == 'P') prev++;
    else if(curr == 'y' || curr == 'Y') prev--;

    return prev;
},0);
console.log(result);
/**
 * function solution(s){
    const parsedAry = s.split('');
    const result = parsedAry.reduce((prev, curr) =>{
        if(curr == 'p' || curr == 'P') prev++;
        else if(curr == 'y' || curr == 'Y') prev--;

        return prev;
    },0);
    if(result == 0) return true;
    else return false;
}
 */