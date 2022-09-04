//조건문 Conditinal Statement 
//switch 
// if else if else if 
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우 

let day = 6; // 0:월요일 ... 6:일요일
let dayName;

if(day ===0){
    dayName = '월요일'
}else if(day ===1){
    dayName = '화요일'
}else if(day ===2){
    dayName = '수요일'
}else if(day ===3){
    dayName = '목요일'
}else if(day ===4){
    dayName = '금요일'
}else if(day ===5){
    dayName = '토요일'
}else if(day ===6){
    dayName = '일요일'
}

console.log('귀찮은 if문 >>>> ' , dayName);


switch(day){
    
    case 0 :
        dayName = '월';
        break;
    case 1 :
        dayName = '화';
        break;
    case 2 :
        dayName = '수';
        break;
    case 3 :
        dayName = '목';
        break;
    case 4 :
        dayName = '금';
        break;
    case 5 :
        dayName = '토';
        break;
     case 6 : 
        dayName ='일'
        break; 
        

console.log('switch문 >>> ', dayName);


let condition = 'okay' //좋은 상태 okay, good || bad 나쁨
let text;

switch (condition){
    case 'okay':
    case 'good':
        text = '좋음'
        break; 
    case 'bad' : 
        text = '나쁨';
        break;
}

console.log(text);

}

