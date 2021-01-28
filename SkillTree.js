const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];



function solution(skill, skill_trees) {
    var answer = 0;
    let skills = skill.split('');
    answer = checkChar(skills, skill_trees, answer);
    return answer;
}
function checkChar(skills, skill_trees, answer){
    for(let i = 0; i < skill_trees.length; i++){
        let index = 0;
        for(let j = 0; j < skill_trees[i].length; j++){
            
            if(skill_trees[i].charAt(j) == skills[index]){
                index++;
                if(skills.length == index) break;
            }
            else{
                for(let k = index + 1; k < skills.length; k++){
                    if(skill_trees[i].charAt(j) == skills[k]){
                        answer--;
                        j = skill_trees[i].length;
                        break;
                    }
                }
            }
        }
        answer++;
    }
    return answer;
}

let answer = solution(skill, skill_trees);
console.log(answer);

// https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript