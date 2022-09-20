//콜백 나중에 꼭 돌아올게!!

//일급객체 first-class object -> 함수로 교체 가능 
/*
일반 객체처럼 모든 연산이 가능한 것 
* 함수의 매개변수로 전달
*함수의 반환값
* 할당 명령문
* 동일 비교대상
*/

//함수가 변수처럼 다 된다... 연산됨 
//핫한 언어들은 1급함수...... 연산됨 

/*
고차함수 Higer -order function
인자로 함수를 받거나 (콜백함수 )
*/

const add = (a,b) => a +b ;
const multifly = (a,b) => a* b;


//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 
//그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨 
function cal(a,b, action){
    let result = action(a,b);
    console.log(result);
}

//외부로부터 전달 받는 함수 = callback 
//이 함수를 안에서 새로 호출함 

console.log('add 호출 ')
cal(1,2, add)


console.log('곱셈 호출 ')
cal(1,2, multifly)

//callback 나중에 돌아와 ! 그래서 callback 