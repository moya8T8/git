//static 정적 프로퍼티, 메서드 

class Fruit { //생성자 함수는 첫글자를 대문자로 생성함 
    
    static MAX_FRUITS = 4; 

    //생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji){       
        this.name = name;  
        this.emoji = emoji;
    }
    display = () => { //function 이라는 키워드를 붙이지 않고 그냥 함수생성을 하면됩니다.
        console.log('${this.name} : ${this.emoji');
    }; //-> 얘네는 클래스의 인스턴스가 생성된 다음에 나오는 애들이기 때문에  인스턴스 레벨의 메소드 된다 
    //템플릿인 상태기 때문에 Fruit.display 호출이 절대 절대 안됨 !!!!!

    //클래스 레벨의 메서드
    static makeRandomFruit(){
        //클래스 레벨의 메서드에서는 this를 참조할 수 없다 (왜냐면 그저 템플릿이니까 담을 게 없어 )
        return new Fruit('banana', '🍌');
    }




}

const banan = Fruit.makeRandomFruit();
console.log(banan); //직접적 호출중 

//클래스 레벨에서만 호출 가능 
console.log(Fruit.MAX_FRUITS);

//apple은 Fruit 클래스의 인스턴스이다 
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

//obj는 객체이고, 그 어떤 클래스이 인스턴스도 아닙니다!!!! 매우중요!!! 
const obj = {name : 'itme'}

console.log(apple);
console.log(orange);