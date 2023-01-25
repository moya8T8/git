 /**
  * promise.all 병렬적으로 한번에 모든 promise들을 실행!
  * 성공했을 때만 all 
  * 모든 걸 사용할거라면 allSettled 
  */

 function getBanana() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('🍌');
        console.log('1')
      }, 1000);
    });
  }
  
  function getApple() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('🍎');
        console.log('2')
      }, 3000);
    });
  }
  
  function getOrange() {
    return Promise.reject(new Error('no orange'));
  }

//바나나와 사과를 같이 가져오기 
//프로미스 내장함수 사용 x (1)
getBanana() 
  .then((banana) =>
  getApple()
    .then((apple) => [banana, apple])
  )
  .then(console.log) 
  /**
   * log 값
   * 1
   * 2
   * [ '🍌', '🍎' ]
   */

  //Promise.all 병렬적으로 한번에 모든 Promise를 실행 (2)
  Promise.all([getBanana(), getApple()])
    .then((fruits) => console.log('all', fruits));
  /**
   * log 값 (위에 만든 함수 호출과 함께 실행했을 경우 )
   * 1 - (1)
   * 1 - (2)
   * 2 - (2)
   * all [ '🍌', '🍎' ] (2)
   * 2 (1)
   * [ '🍌', '🍎' ] (1)
   */

  //Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김(3)
//   Promise.race([getBanana(), getApple()])
//   .then((fruits) => console.log('race', fruits));

/**
 * 
 * 1 
 * 1 (2)
 * race 🍌 (2)
 * 2 (2)
 * 2 
 * [ '🍌', '🍎' ] 
 */

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log); //error 문구 출력 

// 모든 걸 사용할거라면 allSettled 

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  . then((fruits) => console.log('all-settle', fruits))
   .catch(console.log); 

   /**
    * 1
    * 1
    * 2
    * all-settle [
    { status: 'fulfilled', value: '🍌' },
    { status: 'fulfilled', value: '🍎' },
    {
        status: 'rejected',
        reason: Error: no orange
            at getOrange (C:\Users\nhjin\git\dreamJs\git\doIt\ch12_\6.promise-all.js:26:27)
            at Object.<anonymous> (C:\Users\nhjin\git\dreamJs\git\doIt\ch12_\6.promise-all.js:86:46)
            at Module._compile (node:internal/modules/cjs/loader:1159:14)
            at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
            at Module.load (node:internal/modules/cjs/loader:1037:32)
            at Module._load (node:internal/modules/cjs/loader:878:12)
            at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
            at node:internal/main/run_main_module:23:47
    }
    ]
    * 2
    * [ '🍌', '🍎' ]
    */