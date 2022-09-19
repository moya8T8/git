//return을 명시적으로 하지 않으면 자동으로 undefined가 반환됨.
function add(a,b){
    return a + b;
}

const result = add(1,2);

console.log(result);

function print(text){
    console.log(text);
}
console.log('확인') // 확인
print('나') //나
const outcome = print('text'); 
console.log('outcome :', outcome); // outcome : undefined ->  return 값을 정하지 않았기 때문에 

//이 출력함수를 조건을 정하고 싶을 경우... 
//중간에 조건이 맞으면 return되어 함수가 중단됨 
function print2(num){
    if(num < 0) return ; 
    console.log(num);
}

