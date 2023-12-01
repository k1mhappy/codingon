const Practice = require('../model/Practice');

exports.main = (req, res) => {
    res.render('practice');
}

exports.login = (req, res) => {
    console.log(req.body); // { userId: 'test', userPw: '1234' }

    const userData = Practice.getUserInfo();
    console.log('userData >', userData); // { realId: '홍길동', realPw: '1234' }

    if (userData.realId === req.body.userId &&
        userData.realPw === req.body.userPw) {
        res.send({ isSuccess: true, userId: userData.realId });
    } else {
        res.send({ isSuccess: false });
    }
}