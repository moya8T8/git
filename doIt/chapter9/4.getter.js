//함수는 특정한 일을 하기 위해서 호출되는 건데 
//이번예시는 어떤 특정한 동작 수행이 아닌 속성들의 값을 조합해서 보여주는거라서 때문에 
//get or set  키워드를 쓸 경우 함수호출하듯 쓰는 것이 아니라, 그냥 프로퍼티 호출하듯 쓸 수 있다

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName  = lastName;
    }

    //  fullName(){
    //     return '${this.lastName} ${this.firstName}';
    // } 처음에 이렇게 만들었을 때는 호출시 student.fullName(); 해줘야 함 그런데 아래처럼 
    //get set을 붙이면 그럴 필요없이 그냥 프로퍼티에 접근하듯 접근 가능 


    get fullName(){
        return '${this.lastName} ${this.firstName}';
    }

    set fullName(value) {
        console.log('set' , value);
    }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(studnet.fullName); //get을 붙였기 때문에 함수호출하듯 호출할 필요가 없음 
student.fullName = '김철수'; //set이 호출됨 

