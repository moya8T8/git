//얕은 복사 shallow copy -객체의 메모리 주소 전달
// 자바스크립트에서는 복사할 때 항상 얕은 복사가 이루어짐
// Array.from, concat , slice, spread.. Object.assign

const pizza = { name: '🍕', price: 2, owner: { name: 'Ellie' } };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
/**
 * store1 [
  { name: '🍕', price: 2, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 }
]
*/
console.log('store2', store2);
/**
 * store2 [
  { name: '🍕', price: 2, owner: { name: 'Ellie' } },
  { name: '🍜', price: 3 }
]sss
 */


/**
 * 곁다리
 * 일급함수 first class function
 * 함수가 일반객체처럼 사용할 수 있다면 
 * 고차함수 higer-order function
 * 인자로 함수를 받거나 콜백함수
 * 함수를 반환하느 ㄴ함수를 고차함수 
 * 
 * side effect 함수 내부에서는 
 * 순수함수를 여러개로 묶어두면 
 * 
 * 아 한마디로 따로 빼는 함수네 
 */