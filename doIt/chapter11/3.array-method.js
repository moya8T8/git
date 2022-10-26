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






