// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용

// 집 이라는 클래스
/*
*속성: 
만들어진 연도, 집의 이름, 창문 갯수 등등 ..

*메소드: 
창문갯수 출력하는 메소드, 집의 이름 출력하는 메소드 등..
*/

// 클래스 객체 정의
class House {
    //생성자 함수 : 클래스를 이용해 객체를 생성할때마다 속성을  초기화해줌
    constructor(year, name, window){ //클래스house를 만들때 전달받을 속성들을 작성
        this.year = year;
        this.name = name;
        this.window = window;
    }

    // 메소드 1: 집의 나이를 출력
    getAge() {
        console.log(`${this.name}는 건축한지 ${2023-this.year}년 했다!`);
    }
    // 메소드 2: 창문 갯수 출력
    getWindow() {
        console.log(`${this.name}의 창문 갯수는 ${this.window}개다!`);
    }
}

// 클래스(=틀)을 이용해서 객체를 만들기
const house1 = new House(2010, '아파트', 10);
console.log('house1 : ', house1);
console.log(house1.name);
house1.getAge();

const house2 = new House(2012, '빌라', 20);
house2.getAge();
house2.getWindow();


//--------실습
class Shape {
    constructor(width, height){ // 생성자 함수 만들어주기
        this.width = width;
        this.height = height;
    }

    getArea() { //메소드
       return this.width * this.height; 
    }
}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());


// 클래스 상속
// 부모 클래스 : 미리 만들어둔 House라는 애가 될거고
// 자식 클래스 : Apartment 로 만들거임
class Apartment extends House {
    constructor(year, name, window, floor){
        // super라는 키워드를 통해 부모 객체에서 상속 받음 => 상속 받은 부모 클래스의 생성자를 호출 
        super(year, name, window);
        this.floor = floor; //애는 Apartment에서 추가로 만든거니까 따로 지정해줘야함
    }

    getFloor(){
        return `${this.year}년에 지어진 ${this.name}의 층수는 ${this.floor}이다`;
    }

    // 오버라이딩
    // 부모 클래스에 정의되어 있는 메소드를 이름은 동일하게 쓰되, 내용은 다르게
    getAge(){ //여기서 다시 정의하겠다~
        console.log(`${2023-this.year}년 된 ${this.name}는 총 ${this.floor}층이다.`)
    }
}
const apt1 = new Apartment(2022, '레미안' , 100, 500);
console.log(apt1);
apt1.getAge();
console.log(apt1.getFloor()); //getAge나 getWindow도 동일하게 쓸수있다


//--------실습2 
class Rectangle extends Shape {
    constructor(width, height){
        super(width, height);
        
    }
    getDiagonal(){
        return Math.sqrt(this.width*this.width + this.height*this.height);
    }
}
let rec2 = new Rectangle(3,4);
console.log(rec2.getDiagonal());

class Triangle extends Shape {
    constructor(width, height){
        super(width, height);
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}
let tra = new Triangle(3,3);
console.log(tra.getArea());

// 파이x반지름제곱