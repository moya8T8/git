const fruits = ['🍌', '🍎', '🍇', '🍑'];

//배열 아이템을 끄집어 내는법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
}

// const fruits = ['🍌', '🍎', '🍇', '🍑'];
//추가 삭제 쓰지 마세여 
fruits[6] = '🍓'; //그냥 두칸의 공백이 생겨버리고 같은 자리의 인덱스를 사용하게 되면 그냥 덮어씌워지게 됨 
console.log(fruits);

delete fruits[1];
console.log(fruits);