const x = 0;
const y = 0;

const coordinate = {x : x, y:y};
//{x:0, y:0}

const coordinate2 = {x : y};
//{x:0, y:0}

function makeObj(name, age){
    return{
        name,
        age:age
    };
} 
//=> 결과가 똑같음 ... 생략가능 