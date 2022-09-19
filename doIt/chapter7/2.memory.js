/*
 함수 메모리 주소를 가리키고 있음 

*/ 

function add(a,b){
    return a + b;
}

const sum = add; // sum이라는 변수도 add함수의 메모리 주소를 가리킴 

 console.log(sum(1,2));
 console.log(add(1,2)); 
 
 //아...이ㅣ래서... 새로운 값에 할당을 해도 잘 나오는 거였구나..
 //안전하게 한번 감싸고서 한 거고... 

 console.log(sum());//인자를 전달하지 않으면 이렇게 Nan 값이 나옴 