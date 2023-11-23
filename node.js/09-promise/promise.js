// Promise (프로미스) 객체
/*
* - 비동기 함수를 동기처리하기 위해 만든 객체
* - 미래에 성공/실패 에 대한 결과 값을 "약속"한다는 의미
* - 성공,실패를 분리해서 반환하며
* - 성공에 대한 결과는 then이라는 메서드로,
* - 실패에 대한 결과는 catch라는 메서드로 처리
* - resolved : 성공
* - rejected : 실패
*/

// 1. promise 생성하는 코드
// function promise1(flag){
//     // 프로미스 객체를 생성하여 반환
//     return new Promise(function(resolve, reject){
//         if(flag){
//             resolve(`현재 프로미스의 상태는 fulfilled(이행), then메서드로 연결! flag: ${flag}`);
//         }else {
//             reject(`현재 프로미스의 상태는 rejected(거절)!, catch메서드로 연결! flag: ${flag}`);
//         }
//     })
// }

// // 2. promise를 사용하는 코드
// promise1(5 < 3) //true넣어도되고 왼쪽같은거 넣어도되고 내맘
//     .then((result)=>{
//         console.log('result: ',result)
//     }).catch((error)=>{
//         console.log('error: ', error)
//     })

//트루일때 
//result:  현재 프로미스의 상태는 fulfilled(이행), then메서드로 연결! flag: true
//false일때
//error:  현재 프로미스의 상태는 rejected(거절)!, catch메서드로 연결! flag: false

// --------------------프로미스 예제
// index.js 파일에서 "콜백함수"를 이용해서 동기처리한 코드를
// "promise"를 이용해서 동기처리를 해보자
// function goMart(){
//     console.log('마트에 와서 어떤 음료를 살지 고민중,,');
// }

// function pickDrink(){
//     return new Promise(function(resolve,reject){//우리는 서버에 요청을 만들지 않기 때문에 직접 promise 객체를 만들어 쓰는거니까 참고하자
//          //3초 고민 (3초 후 실행)
//         setTimeout(function(){
//         console.log('고민 끝!');
//         product = '콜라';
//         price = 2600;
//         const money = 2000;

//         if(price > money){
//             reject();
//         }else {
//             resolve();
//         }
        
//         // resolve(); //resoleve가 반환이되면 promise결과값으로 성공이 반환되겟쥬? => 즉 성공을 의미하는 resolve 실행
//         }, 3000);
//     }) 
// }

// function pay(product, price){
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product, price;
// goMart();
// pickDrink().then(()=>{ //resolve를 의미
//     pay(product, price);
// }).catch(() => console.log('돈이 부족하다ㅜㅜ'));
//promise는 js에서제공하는 객체 then은 프로미스의 메서드

//------------------- 프로미스 체이닝 -------------
// 함수를 이용해서 ( 4 + 3 ) * 2 - 1 = 13을 연산하기!

// 1. 콜백함수라면?
// function add (n1,n2, callback){
//     setTimeout(function(){
//         const result1 = n1+ n2;
//         callback(result1); // 여기서 mul(result)를 실행하려는 목적
//     },1000);
// }

// function mul (n, callback){
//     setTimeout(function(){
//         const result2 = n*2;
//         callback(result2); // sub(result)
//     },700);

// }

// function sub(n, callback){
//     setTimeout(function(){
//         const result3 = n-1;
//         callback(result3);
//     },500);
// }

// add(4,3, function(result1){
//     console.log('add result: ', result1);

//     mul(result1,function(result2){
//         console.log('mul result: ', result2);

//         sub(result2, function(result3){
//             console.log('sub result: ', result3);  //여기서 result는 다다른 result니까 헷갈리면 이름바꾸기
//         })
//     })
// })

// 2. 프로미스 체이닝이라면?
function addPromise (n1,n2){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const result1 = n1+ n2;
            resolve(result1);
        },1000);
    })

}

function mulPromise (n){
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            const result2 = n*2;
            // resolve(result2);
            reject('의도적으로 에러 일으킴!');
        },700);
    })
}

function subPromise (n){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result3 = n-1;
            resolve(result3);
        },500);
    })
}

addPromise(4,3)
.then(function(result1){
    console.log('add result: ', result1);
    return mulPromise(result1);
}).then(function(result2){
    console.log('mul result: ', result2);
    return subPromise(result2);
}).then(function(result3){
    console.log('sub result: ', result3);
}).catch(function(error){
    console.log(error);
})
