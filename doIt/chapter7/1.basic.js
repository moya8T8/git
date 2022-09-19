//사용예제1
function add(num1, num2){
    console.log('function');
    return num1+num2;
}

const result = add(1,2);
console.log(result);

// 사용예제2

let lastName ='김';
let firstName = '지수';
let fullName = '${lastName} ${lastName}' ; 

let lastNam2 ='김';
let firstName2 = '지수';
let fullName2 = '${firstName2} ${lastNam2}' ; 

// 위에 처럼 중복된 사용이 많은 경우엔 함수로 바꿀 수 있음 
// 한국식 미국식 하려면 두군데 다 바꿔야하는 번거로움이 있음 

function fullNameFunction(fN, lN){
    return '${firstName2} ${lastNam2}' ; 
}

console.log(fullNameFunction(lastName, firstName))

//변수할당된 것과 함수 이름은 동일할 수 없음 