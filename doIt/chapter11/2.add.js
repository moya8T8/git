const fruits = ['๐', '๐', '๐', '๐'];

//๋ฐฐ์ด ์์ดํ์ ๋์ง์ด ๋ด๋๋ฒ
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
}

// const fruits = ['๐', '๐', '๐', '๐'];
//์ถ๊ฐ ์ญ์  ์ฐ์ง ๋ง์ธ์ฌ 
fruits[6] = '๐'; //๊ทธ๋ฅ ๋์นธ์ ๊ณต๋ฐฑ์ด ์๊ฒจ๋ฒ๋ฆฌ๊ณ  ๊ฐ์ ์๋ฆฌ์ ์ธ๋ฑ์ค๋ฅผ ์ฌ์ฉํ๊ฒ ๋๋ฉด ๊ทธ๋ฅ ๋ฎ์ด์์์ง๊ฒ ๋จ 
console.log(fruits);

delete fruits[1];
console.log(fruits);