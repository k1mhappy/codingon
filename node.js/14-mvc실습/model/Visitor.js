// exports.getVisitors = () => {
//     return [
//         {
//             id: 1, name: '김형지', text: '하이'
//         },
//         {
//             id: 2, name: '김누구', text: '하이22'
//         }
//     ];
// };

const mysql = require('mysql2');

const conn = mysql.createConnection({
    host : 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
})

exports.getVisitors = (cb) => {
    conn.query(`SELECT * FROM visitor`, (err,rows)=> {
        if(err) {
            throw err;
        }

        console.log('Visitor.js: ', rows);
        cb(rows);
    })
}

exports.postVisitor = (data, cb) => {
    console.log('postVisited: ' ,data);

    const sql = 'INSERT INTO visiter (name, comment) VALUES(?, ?)';
    const values = [data.name, data.comment];
    conn.query(sql, values,(err, rows)=>{
        if(err) throw err;

        console.log('Visitor.js: ', rows);
    } )
}