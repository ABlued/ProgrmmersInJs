let priorities = [1,2,3,4,5,6];     //실험 데이터
const locations = 0;                //실험 데이터
let index = 0;                      //현재 검사하고 있는 위치
function solution(priorities, location) {
    let prioritiesCopy = priorities.slice();        //배열을 복사한다음
    prioritiesCopy.sort((a,b) => b - a);            //오름차순으로 나열
    var answer = location + 1;                      //시작값은 0부터 시작하므로 + 1
    let count = 0;                                  //배열의 길이만큼 검사하기 위한 변수
    while(count != priorities.length){
        answer = compare(priorities, answer);
        if(answer == index) return answer;          //배열 원소중 가장 큰 원소일경우 그 값을 그대로 반환
        count++;
        if(count == priorities.length){
            if(!compareAry(priorities, prioritiesCopy)){  //만약 배열을 한바퀴돌아도 순서대로 정렬이 안될경우
                count = 0;          //다시 처음부터 검사하자
            }
        }
    }
    return answer;
}
function compare(priorities, answer){
    let temp = priorities[index];       //현재 검사해야할 수
    for(let i = index + 1; i < priorities.length; i++){
        if(temp < priorities[i]) {      //검사해야할 수보다 큰 값이 나타나면           
            priorities.push(priorities.splice(index,1));        //그 수를 배열에서 지운 다음 뒤에다가 넣는다.
            answer--;                     //그러면 배열이 왼쪽으로 한칸씩 땡긴것이니 값을 1줄어들고
            if(answer == index) answer = priorities.length; //만약 answer이 index와 같아지게 될 경우 검사한 수가 맨 뒤로 가게 된 것이니 맨 뒷번호를 준다.
            return answer;      //더 이상 검사할 필요가 없으니 함수 종료
        }
    }
    index++;        //검사해야할 수가 이 배열원소에서 가장 큰 것이라면 앞으로 검사할 필요가 없으니 index는 1이 증가해 앞으로의 검사에서 제외된다
    return answer;
}
function compareAry(priorities, prioritiesCopy){
    for(let i = 0; i < priorities.length; i++){     //sort된 배열과 원래의 배열이 완전 같으면 true 하나라도 틀리면 false반환
        if(priorities[i] != prioritiesCopy[i]) return false;
    }
    return true;
}
var answer = solution(priorities,locations);
console.log(answer);