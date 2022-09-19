// 매개변수의 기본값은 무조건 undefined 
//매개변수의 정보는 함수 내부에서 접근ㅇ ㅣ가능한 argument 객체에 저장됨 

function add ( a, b){
    console.log(a) // ->  값을 정하지 않았다면 undefined 
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 } 아래 정보 
    return a + b
}

add(1,2,3) // [Arguments] { '0': 1, '1': 2, '2': 3 }



//매개변수의 기본값 Default Parameter 
//undefined의 경우ㅇ만 기본값을 사용하고 값을 지정해주면 지정된 값을 사용함 
function add2 ( a = 1, b=1){ //기본값 설정 가능 
    console.log(a)  
    return a + b
}

//Rest 매개변수 Rest parmeter 
function sum(...numbers){ //인자가 너무 많아서 예상할 수 없을 경우 
    console.log(numbers)
}

sum(1,2,3,4,5,6,7)