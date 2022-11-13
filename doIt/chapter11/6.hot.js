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
//퇴사하고 나면 이제 공부할 때 생카 홈페이지 카페를 만들어보면 좋을 듯욥 
//엘도라도 들어야지 