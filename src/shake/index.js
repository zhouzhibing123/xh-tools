/*
 * @Author: xingzhonghe
 * @Date: 2022-11-06 12:14:04
 * @LastEditTime: 2022-11-06 14:53:35
 * @FilePath: \javascriptd:\学习东东\npm自己的包\XHTools\src\shake\index.js
 * @Description: Realization of Anti shake Function
 * 
 * Copyright (c) 2022 by ZhouZhiBing123 3030639099@qq.com, All Rights Reserved. 
 */
function _shake(config) {
    const {
        callBack,
        immediately = false,
        delay = 3000
    } = config

    if (typeof delay !== 'number') throw new TypeError('The first parameter of shake is a number');
    if (typeof callBack !== 'function') throw new TypeError('The second parameter of shake is a function');
    if (typeof immediately !== "boolean") throw new TypeError('The three parameter of shake is a boolean');

    // shake setTimeout
    let timer = null;
    // is execute
    let immediatelyFlag = immediately;

    // start shake 
    const shake_fn = function(...params) {
        if (immediately && immediatelyFlag) {
            callBack.apply(this, [...params])
            immediatelyFlag = false;
        }
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            if (immediately) {
                immediatelyFlag = true;
            }
            callBack.apply(this, [...params]); // 将this绑定到事件对象中
        }, delay);
    }

    // clear shake 
    shake_fn.clearShake = function() {
        timer && clearTimeout(timer);
        timer = null;
        immediatelyFlag = immediately
    }

    return shake_fn;
}
module.exports = {
    _shake
}