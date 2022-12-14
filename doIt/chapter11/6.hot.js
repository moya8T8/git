const fruits = ['π', 'π', 'π', 'π'];

fruits.forEach(function (value, index){
    console.log(index, value);
})
fruits.forEach((value) => console.log(value));

//μ‘°κ±΄μ λ§λ*μ½λ°±ν¨μ)μμ΄νμ μ°Ύμ λ 
//find : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν 
const item1 = {name : 'π₯' , price : 2};
const item2 = {name :'πͺ', price: 3 };
const item3 = { name: 'π', price: 1 };

const products = [item1, item2, item3, item2];
console.log('products >> ', products)
/**
 * products >>  [
  { name: 'π₯', price: 2 },
  { name: 'πͺ', price: 3 },
  { name: 'π', price: 1 },
  { name: 'πͺ', price: 3 }
]
 */

//find : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν 
let result = products.find((item) => item.name ==='πͺ');
console.log('result >>> ', result); //result >>>  { name: 'πͺ', price: 3 }

//findIndex : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν 
result = products.findIndex((item)=> item.name === 'πͺ');
console.log('result2 >>> ', result); //result2 >>>  1

//λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ 
result = products.some((item) => item.name === 'πͺ');
console.log('result3 >>> ', result); // true 

//λ°°μ΄μ μμ΄νμ΄ μ λΆ μ‘°κ±΄μ λ§λμ§ νμΈ 
result = products.every((item) => item.name === 'πͺ');
console.log('result4 >>> ', result); // false 

//μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μ λ‘μ΄ λ°°μ΄λ‘ 
result = products.filter((item) => item.name === 'πͺ');
console.log('result5 >>> ', result); // [ { name: 'πͺ', price: 3 }, { name: 'πͺ', price: 3 } ] 


//μ΄κ±° νλ‘μ νΈμμ data.list κ°μ Έμ¨ κ²λ€ νλ²μ© μ΄ν΄μ λ³΄λ©΄ μ’μ κ±° κ°μ 

console.clear()


const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
    if(item % 2 === 0){
        return item * 2;
    }else{
        return item;
    }
});
console.log('μ§μλ§ λλ°° κ³±νκΈ° >>>> ', result); //μ§μλ§ λλ°° κ³±νκΈ° >>>>  [ 1, 4, 3, 8, 5 ]

//Flatmap : μ€μ²©λ  λ°°μ΄μ μ«μ ν΄μ μλ‘μ΄ λ°°μ΄λ‘! 

result = nums.map(item => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

result = nums.flatMap((item) => [1,2]);
console.log('flatMap>>> ', result);
/**
 * flatMap>>>  [   
  1, 2, 1, 2, 1,
  2, 1, 2, 1, 2 
] 
μ¬μ€ μ΄μΉκ΅¬λ€ λλμ²΄ λ­νλ μ λ€μΈλ° μ΄λ κ² λμ¨κ±°μ§? 
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

//sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
//λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); //[ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); //[ 0, 1, 10, 2, 4, 5 ] λ¬Έμμ΄λ‘ μΈμλ¨ 

numbers.sort((a,b) => a-b);
console.log('μ«μλ‘ λ§λ€μ΄μ  ><>>> ' , numbers) //μ«μλ‘ λ§λ€μ΄μ  ><>>>  [ 0, 1, 2, 4, 5, 10 ]

//reduce λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘ λ§λ€κΈ°
result = [1,2,3,4,5].reduce((sum, value) => (sum += value), 0);
console.log('reduce >>> ', result); //reduce >>>  15

