const student1 = [1,2,3,4,5];
const student2 = [2,1,2,3,2,4,2,5];
const student3 = [3,3,1,1,2,2,4,4,5,5];
const answer = [1,2,3,4,5];


function solution(answers){
    var answer = [];
    const pointOfStudent1 = check(student1, answers);
    const pointOfStudent2 = check(student2, answers);
    const pointOfStudent3 = check(student3, answers);
    let max = Math.max(pointOfStudent1, pointOfStudent2, pointOfStudent3);

    if(pointOfStudent1 == max) answer.push(1);
    if(pointOfStudent2 == max) answer.push(2);
    if(pointOfStudent3 == max) answer.push(3);
    return answer;
}
function check(student, answer){
    let i = 0;
    const result = answer.reduce((prev, curr) =>{
        if(student[i++] == curr) prev++;
        if(i == student.length) i = 0; 
        return prev;
    },0);
    return result;
}
solution(answer);

// 문제 링크 : https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript