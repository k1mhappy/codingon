// ------------------예제
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

// let name, txt, msg;
async function exe(){
    let name = await call('kim');
    console.log(name, '반가워');
    let txt = await back();
    console.log(`${txt}를 실행했구나`);
    let msg = await hell();
    console.log(`여기는 ${msg}`);
}
exe();