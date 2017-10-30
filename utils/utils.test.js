const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(3,4);
    if(res !== 7) {
        throw new Error(`Expected 7 got ${res}`);
    }
});

it('should square a number', () => {
    var res = utils.square(5);
    if(res !== 25)
        throw new Error(`Expected 25 got ${res}`);
})