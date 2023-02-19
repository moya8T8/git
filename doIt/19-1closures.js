/**
 * 폐쇄 닫히는 느낌
 * 
 * 함수와 그 외부를 둘러싸고 있는 조합 
 * 
 * 내부함수에서 외부함수로 접근 가능한 것 
 * 
 * 외부함수에서 접근 가능함 
 */

/**
 * 그럼 클로져 왜씀? 
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * 
 * 내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해 
 * 캡슐화와 정보은닉 
 * 클래스 private 필드와 같은 효과 (예전 자바스크립트에서는 이것이 필요했다)
 * 
 * 
 */

function loop(){
    const array = [];
    //var와 let의 차이점 
    for (let i = 0; i < 5; i++){ //let일 경우에는 0,1,2,3,4 || var일 경우엔 5,5,5,5,5 
        array.push(function(){
            console.log(i);
        })
        return array;
    }
}
const array = loop();
array.forEach((func => func()));