//접근제어자 - 캡슐화
//private(#), public(기본), protected 
//자바스크립트에는 키워드가 없음

class Fruit{
    #name;
    #emoji;
    #type = '과일';

    constructor(name, emoji){ //생성자 (내부에서 접근)
        this.#name  = name;
        this.#emoji = emoji;

    }

    // display = () => {
    //     console.log('${this.#name} :  ${this.#emoji}');
    // }
    #display = () => {
        console.log('${this.#name} :  ${this.#emoji}');
    } //이렇게 메소드도 #을 붙이면 외부에서 접근이 안됨 
}

const apple = new Fruit('apple', '사과');
//apple.#name = '오렌지' //생성자를 통해서가 아니라, 이렇게 바로 접근해서 하는 건 안됨 접근제어자 #을 걸어두었기 때문에 
// error message : Private field '#name' must be declared in an enclosing class 
// #field는 외부에서 접근이 불가능함 
console.log(apple);

//Fruit.display(); -> 호출불가