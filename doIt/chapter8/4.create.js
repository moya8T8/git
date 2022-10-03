/*하나하나 생성하는 게 아니라 생성자 함수를 통해 만들기 
자바의 함수 생성이나 라이브러리 같은 느낌 like..js version 
*/

//생성자 함수 
function Fruit(name, emoji) { //생성자 함수는 첫글자를 대문자로 생성함 
    this.name = name; //this는 할당된 메모리 그자체를 가르킴 지금 여기서는 
    this.emoji = emoji;
    this.display = () => {
        console.log('${this.name} : ${this.emoji');
    };

    //return this; //생략가능 자바스크립트에서 자동으로 return this를 생성해서 실행됨 
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);