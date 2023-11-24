const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views','views');

// 미들웨어 등록
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 
app.get('/',(req,res)=>{
    res.render('index2');
})

// get
app.get('/login', (req,res)=>{
    console.log(req.query);
    res.render('result2',{
        title: 'Get 요청',
        userInfo : req.query
    })
})

//post
app.post('/login', (req,res)=>{
    console.log(req.body);
    // res.send('회원가입 성공!');

    res.render('result2',{
        title: 'Post 요청',
        userInfo : req.body
    })
})

app.listen(PORT, function(){
    console.log('성공');
})