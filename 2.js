const { log } = require('console');
const exp = require('constants');
const express = require('express');
const app = express();
// const mv = function (req, res, next) {
//     console.log('111');
//     next();
// }
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    throw new Error('服务器内部发生错误');
    res.send('this is a get request')
})
app.get('/user', (req, res) => {
    res.send('this is a getuser request')
})
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('this is a post request')
})
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('this is a post request')
})
app.use(function (err, req, res, next) {
    console.log('发生错误' + err.message);
    res.send('error!' + err.message)
})
app.listen(80, () => {
    console.log('server run at http://127.0.0.1');
})