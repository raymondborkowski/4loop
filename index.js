function isObject(whoAmI) {
    return (!!whoAmI) && (whoAmI.constructor === Object);
}

function isArray(whoAmI) {
    return (!!whoAmI) && (whoAmI.constructor === Array);
}

function isNumber(whoAmI) {
    return !isNaN(whoAmI);
}

function isSet(whoAmI) {
    return (!!whoAmI) && (whoAmI.constructor === Set);
}

function isMap(whoAmI) {
    return (!!whoAmI) && (whoAmI.constructor === Map);
}

function fourLoop(loopMe, callback) {
    var iterator = 0;
    if (isObject(loopMe)) {
        Object.keys(loopMe).forEach(function (k) {
            callback(loopMe[k], k, iterator);
            iterator++;
        });
    } else if (isArray(loopMe)) {
        loopMe.forEach(function (v, i) {
            callback(v, v, i);
        });
    } else if (isNumber(loopMe)) {
        for (var i = 0; i < loopMe; i++) {
            callback(i, i, i);
        }
    } else if (isSet(loopMe) || isMap(loopMe)) {
        loopMe.forEach(function (v, k) {
            callback(v, k, i);
            iterator++;
        });
    }
}

module.exports = fourLoop;
