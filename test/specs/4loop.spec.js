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

    describe('ensures we loop through all items', function () {
        it('loops through all of objects', function (expect) {
            const obj = { foo: 'bar', baz: 'cat', catsRule: true, dogsDrool: true };
            const callback = spy.on('this is the callback');
            fourLoop(obj, callback);
            expect(callback.calls.length).toBe(4);
        });

        it('loops through all of array', function (expect) {
            const arr = ['foo', 'bar', 'baz', 'cat'];
            const callback = spy.on('this is the callback');
            fourLoop(arr, callback);
            expect(callback.calls.length).toBe(4);
        });

        it('loops through all of number', function (expect) {
            const arrLength = 99;
            const callback = spy.on('this is the callback');
            fourLoop(arrLength, callback);
            expect(callback.calls.length).toBe(99);
        });

        it('loops through all of set', function (expect) {
            const mySet = new Set(['foo', 'bar', { baz: 'cats' }]);
            const callback = spy.on('this is the callback');
            fourLoop(mySet, callback);
            expect(callback.calls.length).toBe(3);
        });

        it('loops through all of map', function (expect) {
            const myMap = new Map([['foo', 'bar'], ['baz', 'cats'], ['dogs', 'drool']]);
            const callback = spy.on('this is the callback');
            fourLoop(myMap, callback);
            expect(callback.calls.length).toBe(3);
        });
    });

    describe('ensures we return proper items', function () {
        function mockObj(v, k, i){
            return {
                value: v,
                key: k,
                iterator: i
            };
        }

        it('returns correct object forLoop info for callback', function (expect) {
            const obj = { cats: 'AreAwesome' };
            const expectedValue = {
                value: 'AreAwesome',
                key: 'cats',
                iterator: 0
            };
            var cats = {};
            fourLoop(obj, function (v, k, i){ cats = mockObj(v, k, i); });
            expect(cats).toBe(expectedValue);
        });

        it('returns correct array forLoop info for callback', function (expect) {
            const arr = ['foo'];
            const expectedValue = {
                value: 'foo',
                key: 'foo',
                iterator: 0
            };
            var cats = {};
            fourLoop(arr, function (v, k, i){ cats = mockObj(v, k, i); });
            expect(cats).toBe(expectedValue);
        });

        it('returns correct number forLoop info for callback', function (expect) {
            const arrLength = 1;
            const expectedValue = {
                value: 0,
                key: 0,
                iterator: 0
            };
            var cats = {};
            fourLoop(arrLength, function (v, k, i){ cats = mockObj(v, k, i); });
            expect(cats).toBe(expectedValue);
        });

        it('returns correct set forLoop info for callback', function (expect) {
            const mySet = new Set(['foo']);
            const expectedValue = {
                value: 'foo',
                key: 'foo',
                iterator: 0
            };
            var cats = {};
            fourLoop(mySet, function (v, k, i){ cats = mockObj(v, k, i); });
            expect(cats).toBe(expectedValue);
        });

        it('returns correct map forLoop info for callback', function (expect) {
            const myMap = new Map([['foo', 'bar']]);
            const expectedValue = {
                value: 'bar',
                key: 'foo',
                iterator: 0
            };
            var cats = {};
            fourLoop(myMap, function (v, k, i){ cats = mockObj(v, k, i); });
            expect(cats).toBe(expectedValue);
        });
    });
});
