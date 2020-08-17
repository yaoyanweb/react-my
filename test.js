/*
 * @Author: your name
 * @Date: 2020-08-17 16:34:26
 * @LastEditTime: 2020-08-17 17:02:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-my/test.js
 */
Promise.resolve('ok').then().then()
.then(r=>{
    console.log(1,r)
}).then(r=>{
    Promise.reject('ERR').catch().catch().catch(err=>{
        console.log(2,err);
        return err;
    }).catch(err=>{
        console.log(3,err);
    })
    .then(r=>{
        console.log(4,r)
    }).catch(err=>{
        console.log(5,err);
    });
 })