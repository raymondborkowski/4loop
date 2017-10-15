const isObject = function isObject(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Object);
};

const isArray = function isArray(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Array);
};

const isNumber = function isNumber(whoAmI){
    return !isNaN(whoAmI);
};

const isSet = function isSet(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Set);
};

const isMap = function isMap(whoAmI){
    return (!!whoAmI) && (whoAmI.constructor === Map);
};

const fourLoop = function fourLoop(loopMe, callback){
    if (isObject(loopMe)){
        let iterator = 0;
        Object.keys(loopMe).forEach((k) => {
            callback(loopMe[k], k, iterator);
            iterator++;
        });
    } else if (isArray(loopMe)){
        loopMe.forEach((val, key, iterator) => {
            callback(val, val, iterator);
        });
    } else if (isNumber(loopMe)){
        for (let i = 0; i < loopMe; i++) {
            callback(i, i, i);
        }
    } else if (isSet(loopMe) || isMap(loopMe)){
        let iterator = 0;
        loopMe.forEach((val, key) => {
            callback(val, key, iterator);
            iterator++;
        });
    }
};

module.exports = fourLoop;
