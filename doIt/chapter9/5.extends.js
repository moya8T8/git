/*
같은 동작을 하는 것이 많다면, class로 크게 빼서 만들고 상속을 하면 됨
키워드 : 재정의, 상속  
*/

class Animal{
    constructor(color){
        this.color = color;
    }
    eat() {
        console.log('먹어');
    }
    sleep(){
        console.log('잔다');
    }
}

class Tiger extends Animal{};
const tiger = new Tiger('노랑');
console.log('1' , tiger);
console.log('2');
tiger.eat()

//console.log('3', tiger.color()) 오류천국

class Dog extends Animal{
    constructor(color, ownerName){
        super(color); //그니까 부모꺼 그대로 받고 새로 추가하는 거니까..? 
        this.ownerName = ownerName; 
    }
    play(){
        console.log('놀건데 말리지 마');
    }

    eat(){// 기존에 있던 걸 새롭게 오버라이딩 재정의 
        //super.eat();
        console.log('강아지가 먹는다 ');
    }
}

const dog = new Dog('빨강이', '엘리');
console.log(dog);

console.log('dog.eat');
dog.eat();

const animal = new Animal('검정');
console.log('animal.eat');
animal.eat()