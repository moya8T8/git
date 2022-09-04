//삼항 조건 연산자 Terary Operator
//조건식 ? 표현식 : 표현식 


let fruit = 'orange';
if(fruit ==='apple'){
    console.log('🎈')
}else if(fruit ==='orange'){
    console.log('어륀지');
}else{
    console.log('띠용')
}


fruit === 'apple' ? console.log('엥') : console.log('어렌지');

let emoji = fruit =='apple' ? '사과' : '오렌지';

console.log('이모지 실행 >>>> ', emoji)