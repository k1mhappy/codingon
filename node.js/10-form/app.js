const express = require('express');
const app = express();
const PORT = 8000;

//등록하기 : 뷰엔진은 뭘로쓸꺼냐, ejs쓸거다
app.set('view engine', 'ejs');
app.set('views','./views'); //views실제 폴더만들어줘야함
// view 템플릿파일을 찾을 때 사용할 디렉토리 지정

// 미들웨어 등록
// req.body 객체를 해석할 수 있도록 body-parser 등록
app.use(express.urlencoded({ extended: true})) // req.body는 post요청으로 들어온다. post요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); //json형식으로 데이터를 주고받겠다.

// index.ejs를 get방식으로 랜더해준다는 의미
app.get('/', (req,res)=> {
    res.render('index');// 17행 의미: views 폴더 내부에 index라는 ejs파일을 보여줌
})

// GET 사용하여 '/login' 요기로 요청이 들어오면 임의의 메시지를 전
// get방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login', (req,res)=>{
    console.log(req.query); // { id: 'apple', pw: '1234' }
    
    // res.send('get 요청 성공!'); //얘는 send를 써서 보낸다는 의미

    res.render('result', {
        title: 'Get 요청', 
        userInfo: req.query
    }); //22행에 req.query 값이 userInfo로 넘어간다는의미
})

// post '/login'으로 요청으 들어오면 임의의 메시지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post('/login', (req,res)=>{
    console.log(req.body); //{ id: 'baba', pw: 'baba' }
    // res.send('post 요청 성공!');

    res.render('result', {
        title: 'Post 요청', 
        userInfo: req.body
    }); // 요청방식마다 body에보내고 위에는 쿼리에 보내는거 잘 체크하기!
})

app.post('/js-form-check', (req,res)=>{
    console.log(req.body);
    res.send('js validation 성공!');
})



app.listen(PORT, function(){
    console.log(`${PORT} is opening!`);
})