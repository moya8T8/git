/*
객체를 손쉽게 만들 수 있는  템플릿
1. 생성자 함수(오래된 고전적인 방법)
2. 클래스 (new!! )
 
*/

//생성자 함수 -> 클래스로 바꾸기!!!!!! 

class Fruit { //생성자 함수는 첫글자를 대문자로 생성함 
    
    //생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji){       
        this.name = name;  
        this.emoji = emoji;
    }
    display = () => { //function 이라는 키워드를 붙이지 않고 그냥 함수생성을 하면됩니다.
        console.log('${this.name} : ${this.emoji');
    };
}

//apple은 Fruit 클래스의 인스턴스이다 
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

//obj는 객체이고, 그 어떤 클래스이 인스턴스도 아닙니다!!!! 매우중요!!! 
const obj = {name : 'itme'}

console.log(apple);
console.log(orange);