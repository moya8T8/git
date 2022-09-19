//함수 선언문 function name(){}
//함수 표현식 const name = function() {}

let add = function(a,b){
    return a + b;
}

console.log('function 있음 >>> ', add(1,2))
//표현식 함수는 그냥 함수에 이름을 할당하지 않고 변수에 할당된 이름으로 사용한다 
// 인식하지 ㅇ못한다 let add = function sum(a,b) 이라고 했을 때 
//  sum(1,2)라고 쓰면 undefined 가 뜸 

//간단한 화살표 함수 표현식 
add2 = (a,b) =>{
    return a + b;
}
console.log( 'add2 = (a,b) =>{' , add2(1,2))

//값만 리턴하는 함수라면 
add3 = (a,b) => a+b

console.log('add3 = (a,b) => a+b >>> ', add3(1,2))

//생성자 함수라는 것도 있다 

//함수를 선언하고 바로 사용하고 싶을 때 : IIFE (Immedicatelty-Invoked Function Expressions )
(function run(){
    console.log('✨');
})();