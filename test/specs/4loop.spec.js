const fourLoop = require('../../index');

describe('4loop', function (){
    describe('ensures callbacks were executed', function () {
        it('called the callback executed on obj', function (expect) {
            var wasCallbackHit = false;
            const callback = function callback() {
                wasCallbackHit = true;
            };
            fourLoop({ cats: 'rule' }, callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on array', function (expect) {
            var wasCallbackHit = false;
            const callback = function callback() {
                wasCallbackHit = true;
            };
            fourLoop(['cats', 'rule'], callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on number', function (expect) {
            var wasCallbackHit = false;
            const callback = function callback() {
                wasCallbackHit = true;
            };
            fourLoop(['cats', 'rule'].length, callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on set', function (expect) {
            const mySet = new Set(['foo', 'bar', { baz: 'cats' }]);
            var wasCallbackHit = false;

            const callback = function callback() {
                wasCallbackHit = true;
            };

            fourLoop(mySet, callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on map', function (expect) {
            const myMap = new Map([['foo', 'bar'], ['baz', 'cats'], ['dogs', 'drool']]);
            var wasCallbackHit = false;

            const callback = function callback() {
                wasCallbackHit = true;
            };

            fourLoop(myMap, callback);
            expect(wasCallbackHit).toBe(true);
        });
    });
    describe('ensures loops are properly called', function () {

    });
});
