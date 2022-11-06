/**
 * 퀴즈1 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
 *
 */

 const array = ['🍌', '🍓', '🍇', '🍓'];

 function change(array, one, to){ 

    console.log(array);
    for (let index = 0; index < array.length; index++) {
        if(array[index] ==  to){
            array[index] = one; //객체를 완전히 뺴내서 사용해야함 리뷰중 
        }
    }
    console.log(array) ;   
 }
 change(array, '🥝' , '🍓');

 /**
  * 퀴즈2
  * 배열과 특정한 요소를 전달받아, 그 요소가 몇개나 있는지 카운트하는 함수 만들기 
  */

function check(array, one){
    var output = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] ==  one){
            output++;
        }
        
    }
    console.log(output);
}
const array2 = [ '🍌', '🥝', '🍇', '🥝' ];
check(array2, '🥝')
