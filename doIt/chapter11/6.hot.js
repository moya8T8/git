const fruits = ['🍌', '🍓', '🍇', '🍓'];

fruits.forEach(function (value, index){
    console.log(index, value);
})
fruits.forEach((value) => console.log(value));

//조건에 맞는*콜백함수)아이템을 찾을 때 
//find : 제일 먼저 조건에 맞는 아이템을 반환 
const item1 = {name : '🥛' , price : 2};
const item2 = {name :'🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };

const products = [item1, item2, item3, item2];
console.log('products >> ', products)
/**
 * products >>  [
  { name: '🥛', price: 2 },
  { name: '🍪', price: 3 },
  { name: '🍙', price: 1 },
  { name: '🍪', price: 3 }
]
 */

//find : 제일 먼저 조건에 맞는 아이템을 반환 
let result = products.find((item) => item.name ==='🍪');
console.log('result >>> ', result); //result >>>  { name: '🍪', price: 3 }

//findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환 
result = products.findIndex((item)=> item.name === '🍪');
console.log('result2 >>> ', result); //result2 >>>  1

//배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 
result = products.some((item) => item.name === '🍪');
console.log('result3 >>> ', result); // true 

//배열의 아이템이 전부 조건에 맞는지 확인 
result = products.every((item) => item.name === '🍪');
console.log('result4 >>> ', result); // false 

//조건에 맞는 모든 아이템들을 새 로운 배열로 
result = products.filter((item) => item.name === '🍪');
console.log('result5 >>> ', result); // [ { name: '🍪', price: 3 }, { name: '🍪', price: 3 } ] 


//이거 프로젝트에서 data.list 가져온 것들 한번씩 살펴서 보면 좋을 거 같아 

console.clear()


const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
    if(item % 2 === 0){
        return item * 2;
    }else{
        return item;
    }
});
console.log('짝수만 두배 곱하기 >>>> ', result); //짝수만 두배 곱하기 >>>>  [ 1, 4, 3, 8, 5 ]

//Flatmap : 중첩된  배열을 쫘악 펴서 새로운 배열로! 

result = nums.map(item => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

result = nums.flatMap((item) => [1,2]);
console.log('flatMap>>> ', result);
/**
 * flatMap>>>  [   
  1, 2, 1, 2, 1,
  2, 1, 2, 1, 2 
] 
사실 이친구들 도대체 뭐하는 애들인데 이렇게 나온거지? 
 */

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log('text.split >>>> ', result);
/**
 * text.split >>>>  [   
  'd', 'r', 'e', 'a',
  'm', 'c', 'o', 'd',
  'i', 'n', 'g'      
]
 */

//sort 배열의 아이템들을 정렬
//문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); //[ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); //[ 0, 1, 10, 2, 4, 5 ] 문자열로 인식됨 

numbers.sort((a,b) => a-b);
console.log('숫자로 만들어서  ><>>> ' , numbers) //숫자로 만들어서  ><>>>  [ 0, 1, 2, 4, 5, 10 ]

//reduce 배열의 요소들을 접어서 접어서 값을 하나로 만들기
result = [1,2,3,4,5].reduce((sum, value) => (sum += value), 0);
console.log('reduce >>> ', result); //reduce >>>  15

