//object literal {key:value}
//new Object()
//Object.create()
//key
/*
key - 문자, 숫자, 문자열, 심볼
value - 원시값, 객체 (함수_ )
*/

let apple = {
             name    : 'apple'
    , 'hello-bye'    : '손바닥'
    ,             0  : 1
    , ['hello-bye1'] : '손바닥'
}

apple.name //마침표 표기법 dot notation 
console.log(apple['hello-bye1']); //대괄호 표기법 bracket notation 

//속성추가
apple.emoji = '사과'
console.log(apple.emoji);

//속성삭제
delete apple.emojidd
console.log(pple.emoji);