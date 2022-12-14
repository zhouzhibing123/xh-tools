/*
 * @Author: xingzhonghe
 * @Date: 2022-11-06 12:13:33
 * @LastEditTime: 2022-11-08 16:23:02
 * @FilePath: \react18-2022d:\学习东东\npm自己的包\xh-tools\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by ZhouZhiBing123 3030639099@QQ.COM, All Rights Reserved. 
 */
// config 
const { baseUrl } = require('./config/config.json');

// tools 
const { _shake } = require(`${baseUrl}shake/index.js`);
const { _throttle } = require(`${baseUrl}throttle/index.js`);
const { _randomNumber } = require(`${baseUrl}random-number/index.js`);
const { _clone } = require(`${baseUrl}clone/index.js`);
const { _conutTime } = require(`${baseUrl}count-time/index.js`);
const { _reactive,_watchEffect } = require(`${baseUrl}reactive/index.js`);


module.exports = {
    _shake,
    _throttle,
    _randomNumber,
    _clone,
    _conutTime,
    _reactive,
    _watchEffect
}