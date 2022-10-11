class Counter {
    plus(num){
        num++
        return num 
    }

}

let counter = new Counter();

console.log(counter.plus(2));

//이게 내부에서만 접근가능하도록 설정을 안하면 밖에서 정의해서 바꿔버릴수가 있대 
class Counter2 {
    #value //private 접근제어자선언
    constructor(startValue){
        if(isNaN(startValue) || startValue < 0){
            this.#value = 0;
        }else{
            this.#value = startValue; //검사를 해서 조건에 맞으면 이걸 넣어드리겠습니다!! 
        }
    }
    get value(){
        return this.#value;
    }

    increment = () =>{
        this.#value++;
    };
}

const counter2 = new Counter2(0);
counter2.increment();
counter2.increment();
console.log('2버전');
console.log(counter2.value);
/*
복습 완료   
*/