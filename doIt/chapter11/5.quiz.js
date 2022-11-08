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


  // 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
  // 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
  // input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
  // output: [ '🍌', '🍇' ]

match = function(input, search){
    const result = [];
    for (let index = 0; index < input.length; index++) {
        if(search.includes(input[i])){
            result.push(input[i]);
        }
    }
    return result;

}

  console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));