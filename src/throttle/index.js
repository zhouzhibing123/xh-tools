/*
 * @Author: xingzhonghe
 * @Date: 2022-11-06 15:57:32
 * @LastEditTime: 2022-11-07 09:22:07
 * @FilePath: \javascriptd:\学习东东\npm自己的包\xh-tools\src\throttle\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by ZhouZhiBing123 3030639099@QQ.COM, All Rights Reserved. 
 */
function _throttle(config) {
    const {
        callBack,
        fristTrigger = false,
        lastTrigger = false,
        interval = 1000,
        delay = 1000
    } = config

    let isFrist = true;
    let intervalTimer = null;
    let timeoutTimer = null;
    const throttle_fn = function(...arg) {
        timeoutTimer && clearTimeout(timeoutTimer);
        timeoutTimer = setTimeout(() => {
            clearInterval(intervalTimer);
            if (lastTrigger) lastTrigger();
            isFrist = true;
        }, delay);

        if (isFrist) {
            const fn = callBack.bind(this, [...arg]);
            if (fristTrigger) fn();
            intervalTimer = setInterval(fn, interval);
            isFrist = false;
        }
    }

    // clear shake 
    throttle_fn.clearShake = function() {
        timeoutTimer && clearTimeout(timeoutTimer);
        timeoutTimer = null;
        intervalTimer && clearInterval(intervalTimer);
        intervalTimer = null;
        isFrist = true
    }

    return throttle_fn
}

module.exports = {
    _throttle
}