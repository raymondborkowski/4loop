const FourLoop = require('../../index');

describe('4loop', () => {
    it('callback executed on obj', (expect) => {
        let wasCallbackHit = false;
        const callback = function callback(){
            wasCallbackHit = true;
        };
        FourLoop({ cats: 'rule' }, callback);
        expect(wasCallbackHit).toBe(true);
    });
    it('callback executed on array', (expect) => {
        let wasCallbackHit = false;
        const callback = function callback(){
            wasCallbackHit = true;
        };
        FourLoop(['cats', 'rule'], callback);
        expect(wasCallbackHit).toBe(true);
    });
    it('callback executed on number', (expect) => {
        let wasCallbackHit = false;
        const callback = function callback(){
            wasCallbackHit = true;
        };
        FourLoop(['cats', 'rule'].length, callback);
        expect(wasCallbackHit).toBe(true);
    });
});
