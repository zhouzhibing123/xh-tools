# Javascript Tools Library

1. #### \_countTime

   - description：Get the difference between the two incoming times

   - params：

     - time：string **required**

   - example：

     ```javascript
     const { _conutTime } = require('xzh-tools');
     const time = _countTime('2022-11-9');
     ```

   - return：

     ```json
     {
       "chineseData": "01天15时08分00秒",
       "dataInfo": { "day": "01", "hours": 15, "min": "08", "second": "00" }
     }
     ```

   ​

   ***

2. #### \_clone

   - description：Clone an object

   - params：

     - target：Object **required**
     - deep：boolean **defalut=false**

   - example：

     ```javascript
     const obj = {
       a: 1,
       b: {
         s: 1,
       },
     };
     const newObj = _clone(obj);
     console.log(newObj == obj); // false

     const newObj = _clone(obj, true);
     newObj.b.s = 2;
     console.log(obj.b.s); // 1
     ```

   - return：new clone object

   ***

3. #### \_random-number

   - descriptieon：random number

   - params：

     - min：number **required**
     - max：number **required**

   - example：

     ```javascript
     console.log(_randomNumber(10, 100)); // 10 ~ 100
     ```

   - return： number

   ***

4. #### \_shake

   - description：Anti shake

   - params：

     - config：Object
       - callBack：function **required**
       - immediately：boolean **defalut=false**
       - delay：number **defalut=3000**

   - example：

     ```html
     <input type="text" id="ipt" /> <button id="btn">取消</button>
     ```

     ​

     ```javascript
     const $input = document.querySelector('#ipt');
     const $btn = document.querySelector('#btn');
     const fn = _shake({
       callBack: function (e) {
         console.log(this.value, e);
       },
       immediately: false,
       delay: 1000,
     });
     $input.oninput = fn;
     $btn.onclick = fn.clearShake(); // clear shake
     ```

   - return：function

   ***

5. #### \_throttle

   - description：throttle function

   - params：

     - config：Obejct
       - callBack：function **required**
       - firstTrigger：boolean **default=false**
       - lastTrigger：boolean **defalut=false**
       - interval：number **defalut=1000**
       - delay：number **defalut=1000**

   - example：

     ```html
     <input type="text" id="ipt" /> <button id="btn">取消</button>
     ```

     ```javascript
     const $ipt = document.querySelector('#ipt');
     const $btn = document.querySelector('#btn');
     const fn = _throttle({
        callBack: function(e) {
            console.log(this.value, e)
        },
        fristTrigger:false,
        lastTrigger:false
        interval: 500,
        delay: 1000
     });
     $ipt.oninput = fn
     $btn.onclick = fn.clearThrottle() // clear Throttle
     ```

   - return： function

6. #### \_reactive

   - description：The same reactive as vue3 needs to be matched\_ WatchEffect to use

   - params：

     - target：Obejct **required**

   - example：

     ```javascript
     const { _reactive, _watchEffect } = require('xzh-tools');
     // or:
     import { _reactive, _watchEffect } from 'xzh-tools';

     const reactiveObj = _reactive({
       a: 3,
     });
     _watchEffect(function () {
       /**
        * This function will be called once by default. When your responsive object sends changes, it will be called again. With the
        * latest value, you can do what you want to do in the function,for instance? Modify your DOM?
        */
       console.log(reactiveObj);
     });
     reactiveObj.a = 2;
     ```

   - return： function
