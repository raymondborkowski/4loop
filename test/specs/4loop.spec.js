const FourLoop = require('../../index');

describe('4loop', () => {
    describe('ensures callbacks were executed', () => {
        it('called the callback executed on obj', (expect) => {
            let wasCallbackHit = false;
            const callback = function callback(){
                wasCallbackHit = true;
            };
            FourLoop({ cats: 'rule' }, callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on array', (expect) => {
            let wasCallbackHit = false;
            const callback = function callback(){
                wasCallbackHit = true;
            };
            FourLoop(['cats', 'rule'], callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on number', (expect) => {
            let wasCallbackHit = false;
            const callback = function callback(){
                wasCallbackHit = true;
            };
            FourLoop(['cats', 'rule'].length, callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on set', (expect) => {
            const mySet = new Set(['foo', 'bar', { baz: 'cats' }]);
            let wasCallbackHit = false;

            const callback = function callback(){
                wasCallbackHit = true;
            };

            FourLoop(mySet, callback);
            expect(wasCallbackHit).toBe(true);
        });
        it('called the callback executed on map', (expect) => {
            const myMap = new Map([['foo', 'bar'], ['baz', 'cats'], ['dogs', undefined]]);
            let wasCallbackHit = false;

            const callback = function callback(){
                wasCallbackHit = true;
            };

            FourLoop(myMap, callback);
            expect(wasCallbackHit).toBe(true);
        });
    });
});
