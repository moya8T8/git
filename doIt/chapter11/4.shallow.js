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
]
 */
