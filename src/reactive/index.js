/*
 * @Author: xingzhonghe
 * @Date: 2022-11-08 15:46:56
 * @LastEditTime: 2022-11-08 16:20:24
 * @FilePath: \react18-2022d:\学习东东\npm自己的包\xh-tools\src\reactive\index.js
 * @Description: reactive function 
 * 
 * Copyright (c) 2022 by ZhouZhiBing123 3030639099@QQ.COM, All Rights Reserved. 
 */
let currentDepend = null;
let allDepend = new WeakMap(); // weakMap的键和值都可以存储对象，利于后期查找

class Dep {
    constructor() {
        this.Dependency = new Set();
    }

    add(currentDepend) {
        if (currentDepend) {
            this.Dependency.add(currentDepend);
        }
    }

    send() {
        // 这个函数负责在数据更改的时候分发到所有的依赖
        this.Dependency.forEach(effect => {
            effect();
        });
    }
}

let getDep = (obj, key) => {
    // 首先，利用传入的obj对象找到他在webMap中的关联对象
    let weakObj = allDepend.get(obj);
    // 如果不存在，创建
    if (!weakObj) {
        weakObj = new Map();
        allDepend.set(obj, weakObj);
    }

    // 取出obj中指定键的dep监听对象
    let depMap = weakObj.get(key);
    // 如果不存在，创建
    if (!depMap) {
        depMap = new Dep();
        weakObj.set(key, depMap);
    }

    return depMap;
}

let _reactive = (obj) => {
    // Proxy对比Object.definePerporty：
    // 1、define如果在后续向对象中添加其他属性的话，需要重新再次使用define绑定，而proxy是劫持整个obj对象
    // 2、define是直接修改原来的obj才能监听，proxy需要经过proxy代理
    // 3、能观察的类型更丰富(例如数组，vue2中不能监听数组变化的原因也在这里)
    return new Proxy(obj, {
        get(target, key) {
            let dep = getDep(target, key);
            dep.add(currentDepend);
            // return target[key]; // 在这个地方不介意直接操作target[key]
            return target[key];
        },
        set(target, key, value) {
            let dep = getDep(target, key);
            target[key] = value;
            dep.send();
        }
    });
}

// let data = reactive({ name: 'JENNIE' });

// 这是用来添加依赖的函数，每当使用一个需要响应式的地方，需要用这个函数包裹，并传入一个函数，将业务代码写在这个函数中
function _watchEffect(effect) {
    currentDepend = effect;
    effect(); // 默认调用一次，顺便让该函数中所有由reactive创建的对象触发get函数并向各自的dep对象输送依赖
    currentDepend = null;
}


module.exports = {
    _reactive,
    _watchEffect
}