//반복문 Loop Statement
//for (변수선언문; 조건식; 증감식) {}
//실행순서:
//1. 변수선언문
//2. 조건식의 값이 참이면 {}코드블럭을 수행
//3. 증감식을 수행
//4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함
for (let i=0; i < 5; i++){
    console.log(i);
 }
 
 for (let i=0; i < 5; i++){
    for( let j=0; j < 5; j++){
        console.log(i,j);
    }
 }
 
 //무한루프 -> 언젠가는 꼭 false가 되도록 작성
 /*for(;;){
    console.log('d')
 } */
 
 //반복문 제어 : countinue, break;
 
 for(let i = 0; i < 20; i++){
    if(i === 10) {
        continue; //이거 하는 순간 밑에 코드는 생략됨
        console.log('i가 드디어 10이 되었다.')
        break;
    }
    console.log(i);
 }
 
 //while 문
 // while(조건) {}
 //조건이 false가 될 때까지 {} 코드를 반복 실행
 let num = 5;
 while(num >= 0) {
    console.log(num);
    num--;
 }
 
 // let isActive = true;
 let isActive = false;
 let i = 0;
 
 while(isActive) {
    console.log('아직 살아있음')
    if( i ===1000){
        break;
    }
    i++;
 }
 //내 자격지심이야!
 do{
    console.log('조건과 관계없이 무조건 한번은 나와!')
 } while(isActive);