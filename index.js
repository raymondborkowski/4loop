const isObject = function isObject(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Object);
};

const isArray = function isArray(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Array);
};

const isNumber = function isNumber(whoAmI){
    return !isNaN(whoAmI);
};

const fourLoop = function fourLoop(loopMe, callback){
    if (isObject(loopMe)){
        Object.keys(loopMe).forEach((k) => {
            callback(loopMe[k], k);
        });
    } else if (isArray(loopMe)) {
        for (const value of loopMe) {
            callback(value);
        }
    } else if (isNumber(loopMe)) {
        for (let i = 0; i < loopMe; i++) {
            callback(i);
        }
    } else if (isMap(loopMe)) {
        for (const [k, v] of loopMe) {
            callback(v, k);
        }
    }
};

module.exports = fourLoop;
