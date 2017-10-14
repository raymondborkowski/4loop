const FourLoop = require('../../index');

describe('4loop', () => {
    describe('callback was executed', (expect) => {
        let wasCallbackHit = false;
        const callback = function callback(){
            wasCallbackHit = true;
        };
        FourLoop(callback);
        expect(wasCallbackHit).toBe(true);
    });
});
