function runIndelay(callback, seconds){

    if(seconds < 0){
        return;
    }
    
    seconds = seconds * 1000; 

    setTimeout(callback, seconds);
    
}

function runIndelay2(callback, seconds){

    if(!callback){
        throw new Error('함수 넣어주세요.')
    }

    if(seconds < 0 || !seonds){
        throw new Error('seconds는 0보다 커야 함 ')
    }
    
    seconds = seconds * 1000; 

    setTimeout(callback, seconds);
    
}

runIndelay(()=> {console.log('타이머 완료');}, 2)

//arrow function 다시 한번 확인해보기 