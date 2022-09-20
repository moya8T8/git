function display(num){
    console.log(num);
}

const value = 4;
display(value); //이런 경우엔 4가 출력됨 

function display2(num){
    num = 5
    console.log(num); //5 
}

const value2 = 4; 
display2(value2); //이런 경우엔 4가 출력됨 
console.log(value2) //4가 나옴 

//이런 경우가 별로인 이유 
//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은  xx 
// 내부에서 바꾸면 안됨 
//상태변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함 
//원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 



//----------------------------------------------


