function call(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(name); //kim
            resolve(name);
        },1000);
    });
}

function back(){
    return new Promise((resolve,reject)=> {
        setTimeout(function(){
            console.log('back');
            resolve('back');
        },1000);
    })
}

function hell(){
    return new Promise((resolve,reject)=> {
        setTimeout(function(){
            resolve('callback hell');
        },1000);
    })
}

call('kim')
.then(function(name){ //resolve로 넘어온값
    console.log(name, '반가워'); //name이 여기로 넘어와서 kim반가워
    return back();
}).then(function(txt){
    console.log(`${txt} 을 실행했구나`);
    return hell();
}).then(function(msg){
    console.log(`여기는 ${msg}`);
})
//화살표 함수
// call('kim')
// .then((name) => { //resolve로 넘어온값
//     console.log(`${name} 반가워`); //name이 여기로 넘어와서 kim반가워
//     return back();
// }).then((txt) => {
//     console.log(`${txt} 을 실행했구나`);
//     return hell();
// }).then((msg) => {
//     console.log(`여기는 ${msg}`);
// })