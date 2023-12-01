const visitor = require('../model/Visitor');

exports.main = (req,res) => {
    res.render('index');
};

exports.getVisitors = (req,res) => {
    //[Before]
    // console.log(visitor.getVisitors());
    // res.render('visitor', { data: visitor.getVisitors()});

    //[After]
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js: ', result);
        req.render('visitor', {data: result});
        //콜백함수
    })
}

exports.post_visitor = (req,res) => {
    console.log(req.body);
    visitor.postVisitor(req.body, (result)=>{
        console.log(result);
        res.send();
    });
}