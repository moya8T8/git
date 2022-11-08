function replace(array, from, to){
    return array.map(item => item === from ? to : item)
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);