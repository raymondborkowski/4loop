const isObject = function isObject(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Object);
};

const isArray = function isArray(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Array);
};

const isNumber = function isNumber(whoAmI){
    return !Number.isNaN(whoAmI);
};

const fourLoop = function fourLoop(loopMe, callback){
    if (isObject(loopMe)){
        Object.keys(loopMe).forEach((k) => {
            callback(loopMe[k], k);
        });
    } else if (isArray(loopMe)) {
        loopMe.forEach((val, iterator) => {
            callback(val, iterator);
        });
    } else if (isNumber(loopMe)) {
        for (let i = 0; i < loopMe; i += 1) {
            callback(i);
        }
    }
};

module.exports = fourLoop;
