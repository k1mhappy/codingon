const { render } = require('ejs');
const express = require('express'); //익스프레스 모듈을 가져왔음
const app = express(); //앱이라는 익스프레스 객체를 만들어줌
const PORT = 8000; //포트도 만들어줌

// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine', 'ejs');
// 템플릿 엔진 파일(.ejs)을 저장할 위치 등록
app.set('views', './views');

// static 미들웨어 등록 (정적 파일 로드 ex. css, js)
// static 이라는 실제 폴더를 static이름으로 접근하겠다.
app.use('/static', express.static(__dirname + '/static'));
console.log(__dirname); // ~~/07-3-express


// app.get(경로, 해당 경로로 들어왔을 때 실행할 콜백함수)
// localhost:8000/ 경로로 접속했을 때 라는 의미
app.get('/', function(req,res){ //app.get이라는 메소드를 사용
    //res.send(응답내용)
    // res.send('<h1>Hello Express!</h1>');

    //index라는 파일명을 찾아서 해당 파일 랜더
    res.render("index",{
        btns: ['사과', '오렌지', '키위'],
        isLogin : false,
        me: {
            name: 'Luna',
            msg: '반갑습니다~'
        }
    }); // 뒤에 확장자는 6번줄에 ejs를 사용하겠다고 했으니 이럴땐 확장자  생략가능 
    // 랜더 뒤에 ,{} 를 넣으면 변수값 보낼 수 있음
    // btns이라는 키값으로 변수를 보냄
})

// login 경로로 접속했을 때
app.get('/login', function(req,res){
    res.render('login');
})

// register 경로로 접속했을 때
app.get('/register', function(req,res){
    res.render('register');
})


app.get('/kdt', function(req,res){ //app.get이라는 메소드를 사용
    //res.send(응답내용)
    res.send('<h1>Hello kdt!</h1>');
})

//포트 열기
app.listen(PORT, function(){ //뒤에 콜백함수로 포트가 열렸다는 함수 만들어주기
    console.log(`server listening on ${PORT}`);
})