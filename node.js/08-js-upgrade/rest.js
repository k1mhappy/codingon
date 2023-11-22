// rest 파라미터

// 1. 함수에서 rest 파라미터 사용
const values = [1, 2, 3, 4, 5];

// 함수 선언 (rest 사용)
function get(a,b, ...rest){
    console.log('a : ', a); // 1
    console.log('b : ', b); // 2
    console.log('rest : ', rest); // [3,4,5]
}

// 함수 호출 (spread 사용)
get(...values);
get(values);
/* 위에 실행하면 이렇게 나옴
a :  [ 1, 2, 3, 4, 5 ]
b :  undefined
rest :  []
*/

// 2. 객체에서 rest 사용
const icecream = {
    flavor : "choco",
    price: 1000,
    company: 'binggre'
}
const {flavor, ...rest} = icecream; 
console.log(flavor); //choco
console.log(rest); //{ price: 1000, company: 'binggre' }

// 3. 배열에서 rest 사용
const number = [1,2,3,4,5,6];
const [one, two, ...num] = number; //rest의 이름은 내맘대로 설정해도됨 ! why? 앞에 ...spread가 있으니까 rest라 안적어도 나머지 나옴

console.log(one); // 1
console.log(two); // 2
console.log(num); // [ 3, 4, 5, 6 ]

const [...num1] = number; // []이런 괄호를 씌워주는거임 
console.log(num1); // [ 1, 2, 3, 4, 5, 6 ]