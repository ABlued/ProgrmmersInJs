const numbers = "91254";
let isPrime = [false,false];
function solution(numbers) {
    const max = Math.pow(10, numbers.length);
    findPrime(max);
    const aryNumbers = numbers.split('');
    let result = [];
    let sol = [];
    for(let i = aryNumbers.length; i > 0 ; i--){
        result = permutation(aryNumbers,i);
        // console.log(result);
        for(let j = 0; j < result.length; j++){
            // console.log(parseInt(result[j].join('')));
            const key = parseInt(result[j].join(''));
            if(isPrime[key] == true){
                const isHad = sol.some((value) => value == key);        //이미 배열에 있는거면 무시한다.
                if(isHad == false){
                    sol.push(key);
                }
            }
        }
    }
    // console.log(sol);
    return sol.length;
}


function findPrime(max){        //소수 찾는 로직
    for(let i = 2; i < max; i++){
        isPrime[i] = true;
    }

    for (let i = 2; i < max; i++){
        if(isPrime[i] == true){
            for(let j = i+i; j < max; j+=i){
                isPrime[j] = false;
            }
        }
    }
}

function permutation(arr, selectNum) {      //배열 조합 만들어내는 로직
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
  
    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permuationArr = permutation(restArr, selectNum - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
  }
console.log(solution(numbers));

// [JS]순열,조합,중복순열 구하기 : https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0
// 문제링크 : https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript