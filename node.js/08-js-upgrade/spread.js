// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할
// => 객체들의 값을 펼쳐준다!

// 배열에서의 spread 사용하기
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread);

// 문자열에서 spread
const str = 'hello';
console.log([...str]); //h,e,l,l,o 문자열이 분해가됨
console.log([...'hello']); //동일한 의미
console.log(str.split('')); //동일한 의미

// 객체에서 spread
const chip = {
    base: 'chip',
    company: 'lotte'
}
const potatiChip = { //기존의 객체값을 이용해서 새로운 객체값을 만들고 싶을 때 사용하면 좋겟쥬?
    ...chip,
    flavor: 'onion'
}
const sweetPotatoChip = {
    ...potatiChip,
    flavor: 'sweet onion'
}
console.log('chip: ',chip);
console.log('potatochip: ',potatiChip);
console.log('sweet potato chip',sweetPotatoChip);

//실습
const word1= 'abc';
const word2= 'xyz';
const arr = [...word1, ...word2];
console.log(arr);