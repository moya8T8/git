/*
지금까지 많은 것을 공부했다 
머릿속에 남았..을것이다 
객체, 메모리, 클래스, 함수 등등  
*/

/*
자바스크립트 내장객체 
런타임 환경 
내장객체 bilt - in Object (**학습목표 Data Type )
호스트객체 Host Object (브라우저 호스트환경, 노드환경 )

사용자 정의 객체 User-Defined Objects 
*/

//래퍼 객체
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다. 
const number = 123;
//number 원시타입을 감싸고 있는 Number 객체로 감쌈
console.log(number.toString());
console.log(number); //number 원시 타입이 출력됨 

const text = 'text';
console.log(text);
text.length;
text.trim();l


