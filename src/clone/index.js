function _clone(target, deep = false) {
    if (!deep) return Object.assign({}, target)

    function isObject(obj) {
        const type = typeof obj;
        return obj !== null && type === "object"
    }
    let obj = Array.isArray(target) ? [] : {}
    for (const key in target) {
        const targetValue = target[key]
        if (isObject(targetValue)) {
            obj[key] = _clone(targetValue, deep);
        } else {
            obj[key] = targetValue
        }
    };

    return obj
}

module.exports = {
    _clone
}