console.log('1',globalThis);
console.log('2',this);
console.log('3', Infinity);
console.log('4', undefined);

eval('const num = 2; console.log(num)');
console.log('5', isFinite(1)); //유한한 숫자일 경우 TRUE
console.log('6', isFinite(Infinity));

console.log('7', parseFloat('12.43')) //문자열로 된 float형태를 찐 float로 변경 
console.log('8', parseInt('12.43')); //정수
console.log('9',parseInt('11'));

/*
URL (URI, Uniform Resource Identifier 하위 개념 )
아스키 문자로만 구성되어 있음
한글이나 특수문자는 이스케이프 처리해야함 
*/
const URL = 'http://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 Component 이용 
const part = '드림코딩.com';
console.log(encodeURIComponent(part));