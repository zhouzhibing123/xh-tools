/*
 * @Author: xingzhonghe
 * @Date: 2022-11-06 20:38:36
 * @LastEditTime: 2022-11-06 20:38:44
 * @FilePath: \javascriptd:\学习东东\github上的项目\xh-tools\src\count-time\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by ZhouZhiBing123 3030639099@qq.com, All Rights Reserved. 
 */
function _conutTime(time) {
    const nowti = +new Date(); //返回的是当前时间总的秒数
    const shuru = +new Date(time); //返回的是用户输入时间的总毫秒数
    const times = (shuru - nowti) / 1000; //times 就是剩余时间的毫秒数
    let day = parseInt(times / 60 / 60 / 24); //天
    day = day < 10 ? '0' + day : day;
    let hours = parseInt(times / 60 / 60 % 24); //时
    hours = hours < 10 ? '0' + hours : hours;
    let min = parseInt(times / 60 % 24); //分
    min = min < 10 ? '0' + min : min;
    let second = parseInt(times % 60); //秒
    second = second < 10 ? '0' + second : second;
    return {
        chineseData: day + '天' + hours + '时' + min + '分' + second + '秒',
        dataInfo: {
            day,
            hours,
            min,
            second
        }
    };
}

module.exports = {
    _conutTime
}