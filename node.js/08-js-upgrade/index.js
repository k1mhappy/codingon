// 구조분해할당 

// 1. 배열 구조분해할당
// - 순서가 중요함!
const arr1 = [1,2,3,4,5];
const arr2 = ['a','b','c'];
//구조분해시작
const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five); // 1 2 3 4 5

//undefined
const [x,y,z,alpha] = arr2;
console.log(x,y,z,alpha); // a b x undefined

//undefined에 기본값 지정해주기
const list = ['apple', 'orange'];
const [f1, f2, f3 = 'banana'] = list; //f3이 undefined가 뜰거기때문에 banana라는 기본값 지정해줌 
console.log(f1,f2,f3); // apple orange banana

let num1 = 1, num2 =3;
console.log('swap 전 >' , num1, num2);
[num1,num2] = [num2,num1]; // [num1,num2] = [3,1]
console.log('swap 후 >' , num1, num2);

// 2. 객체 구조분해 할당 tip)객체는 중괄호 쓴다고하네?
// - 키값과 변수명이 일치
const obj = {
    title: '독전2',
    star: 1,
    content: '제발 보지마라..'
}
// 만약 구조분해를 안했다면
console.log(obj.content, obj.star, obj.title);

// key가 존재하지 않는 경우 대비하여 default 값 할당
const { content, star, title, price = 1000} = obj; //아까는 순서가 중요했지만 지금은 키값으로 간다~
console.log(content,  star, title, price);

const {c, s, t} = obj;
console.log(c,s,t); // 배열과 다르게 각각의 값들은 undefined가 뜸 . so 각각의 값들을 key값으로 만들어줘야함
//콜론(:) 을 이용하면 새 변수명으로 바꿔서 저장 가능하다!!
const { content : c1, star : s1, title:t1} = obj;
console.log(c1, s1, t1);

// ------------------------예시---
// 전달받는 데이터
const info = {
    name: 'web-fullstack',
    time: '09~14',
    content: '여러분 배고프시죠..'
}
function getInfo(lecture){ 
    //구조분해할당 사용하여 값 추출
    // console.log(lecture); 구조분해하기 어려우면 콘솔로 찍고 작성하면 편함
    const {name, time, content} = lecture;     //lecture 는 47번줄~50번줄 const info를 받은거임
    // 출력 문장 생성 //아무 단어써서 함수정의해준 다음 문장쓰기 젤쉬은 ``백틱 씀
    const output = `${name}강의는 ${time}시에 하고 ${content} `;
    // 출력 문장 리턴
    return output;
}

const result = getInfo(info);
console.log(result);

// ---------------------------------------
// 단축평가
// &&, ||
// A && B : 두 개의 피연산자 모두 true여야 true를 반환
// A || B : 두 개의 피연산자 중 하나만 true여도 true를 반환

console.log(true && true); // true를 반환하겟쬬?
console.log(false && true); // false
console.log(true || false); // true
console.log(false || true); // true

// 얘네를 그래서 어따 쓰는데?
// && (논리곱)
const v1 = 5;
const v2 = 7;
const result2 = v1 > v2 && 'v1이 큼';
console.log(result2); //false 뜸
const result3 = v1 < v2 && 'v2가 큼';
console.log(result3); //v2가 큼

// || (논리합)
const result4 = v1 || 100; // 앞에 값이 true기 때문에 뒤에까지 검사x
console.log(result4); // 5 
const nameEx = '홍길동' ;
const nameEx2 = null;
console.log(nameEx || '이름x'); //홍길동
console.log(nameEx2 || '이름x'); // 이름x //첫째값이 null이기 때문에 뒤에까지 가서 이름x가 출력됨
