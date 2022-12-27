function runIndelay(seconds){
    return new Promise((resolve, reject) =>{
        if(!seconds || seconds < 0) {
            reject (new Error ('0보다 작아요'))
        }
         setTimeout(resolve, seconds * 1000);
    });
}

runIndelay(2)
    .then(()=> console.log('타이머 완료!'))
    .catch(console.error)
    .finally(() => console.log('끝났다!'));

    //promise 복습 27일 