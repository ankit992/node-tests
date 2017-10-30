const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(3,4);
    expect(res).toBe(7).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
})