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

    return throttle_fn
}

module.exports = {
    _throttle
}