const num1 = 123;
const num2 = new Number(123); //메모리 할당이 큼

console.log(Number.MAX_VALUE); //표기할 수 있는 젤 큰값 1.7976931348623157e+308
console.log(Number.MIN_VALUE);// 표기할 수 있는 젤 작은값 5e-324
console.log(Number.MAX_SAFE_INTEGER); //정수 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.NaN);//NaN
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity

//지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기 )

const num3 = 102;
console.log(num3.toExponential()); //1.02e+2

//반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); //1234

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); //1234.1
console.log(num4.toPrecision(4)); //1234
console.log(num4.toPrecision(3)); //1.23e+3

if(Number.EPSILON> 0 && Number.EPSILON<1){
    console.log(Number.EPSILON); //0과 1중에서 제일 작은숫자
}//2.220446049250313e-16

const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(orgin, expec){
    return Math.abs(orgin - expec) < Number.EPSILON; //원래는 orgin ===  expec
}

console.log(isEqual(1, 1)); 
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); //원래버전에서는 false가 출력됨 