//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits =  ['🍌', '🍎', '🍋'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //fruit은 배열이고 => ture
console.log(Array.isArray({})); // 그냥공백은 낫 배열 => false

//특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); //1 

//배열 안에서 특정한 아이템이 있는지 확인할 때 
console.log(fruits.includes('🍎')); //true

//추가 - 제일 뒤 
let length = fruits.push('🍊');
console.log(fruits); // [ '🍌', '🍎', '🍋', '🍊' ]
console.log(length); //4 

//추가 - 제일 앞
length = fruits.unshift('💕');
console.log(fruits); //[ '💕', '🍌', '🍎', '🍋', '🍊' ]  
console.log(length); //5

//제거 제일 뒤
let lastItem = fruits.pop(); //배열 자체를 수정(업데이트 )
console.log(fruits); //[ '💕', '🍌', '🍎', '🍋' ]
console.log(lastItem); //🍊 오렌지가 나왔쥬?

//제거 제일 앞 
lastItem = fruits.shift(); //배열자체를 수정
console.log(fruits);  //[ '🍌', '🍎', '🍋' ]
console.log(lastItem); //💕

//중간에 추가 또는 삭제
const deleted = fruits.splice(1,1); //0,1,2 중에서 1번자리의 1개를 지우겠어 
console.log(fruits); //[ '🍌', '🍋' ] 중간에 있던 사과가 나갔어
console.log(deleted); //[ '🍎' ] 사과가 나가리됐슈 
fruits.splice(1, 1, '🍎', '🍓'); //첫번째 자리부터 사과와 딸기로 바꿀겡 
console.log(fruits); // [ '🍌', '🍎', '🍓' ] 배열 자체를 수정(업데이트)

//잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0,2);
console.log('newArr', newArr); //newArr [ '🍌', '🍎' ]
console.log(fruits); //[ '🍌', '🍎', '🍓' ]
newArr = fruits.slice(-1); 
console.log(newArr); //[ '🍓' ] 뒤에서 첫번째 딸기만 가져옴 

//여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log('arr3 >> ' , arr3); //arr3 >>  [ 1, 2, 3, 4, 5, 6 ]  

//순서를 거꾸로 
const arr4 = arr3.reverse();
console.log('arr4 >>> ', arr4); //arr4 >>>  [ 6, 5, 4, 3, 2, 1 ]  

//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1, 2, 3],
    [4, [5, 6, [3, 4]]],
  ];

console.log('중접배열  >>> ', arr);

console.log('펼치기 >> ',arr.flat(3));
 /*[
    1, 2, 3, 4,
    5, 6, 3, 4
  ] */

arr.fill(0); //특정한 값으로만 배열을 채우기 
console.log(arr); //[0,0]


arr.fill('s', 1, 3);
console.log(arr); //[ 0, 's' ]

arr.fill('a', 1);
console.log(arr); //[ 0, 'a' ]

//배열을 문자열로 합치기 
let text = arr.join();
console.log('text>>>>', text); //text >>>>  0,a
text = arr.join('|');
console.log(text); //=> 이 함수 완전 유용하다 


