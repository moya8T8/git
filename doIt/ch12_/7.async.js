/**
 * async 비동기야 
 * 비동기코드를 동기적으로 사용할 수 있음
 * async를 써서 반환되는 프로미스를 한꺼번에... 리턴 
 * await을 사용함으로써 기다렸다가 프로미스 함수를 실행시킴  
 */
function getBanana() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('🍌');
      }, 1000);
    });
  }
  
  function getApple() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('🍎');
      }, 3000);
    });
  }
  
  function getOrange() {
    return Promise.reject(new Error('no orange'));
  }

  //바나나와 사과를 같이 가져오기
async function fetchFruits(){
    const banana = await getBanana(); 
    const apple = await getApple();
    return [banana, apple];
}
