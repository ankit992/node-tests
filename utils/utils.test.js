const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(3,4);
            expect(res).toBe(7).toBeA('number');
        });    
    });

    it('should square a number', () => {
        var res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 5, (sum) => {
            expect(sum).toBe(9).toBeA('number');
            done();
        });
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(5, (square) => {
            expect(square).toBe(25).toBeA('number');
            done();
        });
    });
    
    it('should verify first and last names are set', () => {
        var user = {location: 'India', age: 25};
        var res = utils.setName(user, 'Ankit Arora' );
        expect(user).toEqual(res);
        expect(res).toInclude({
            firstName: 'Ankit',
            lastName: 'Arora',
            location: 'India',
            age: 25
        });
    });
    
    // it('should expect some values', () => {
    //     // expect(12).toNotBe(11);
    //     // expect({name: 'Ankit'}).toNotEqual({name: 'ankit'});
    //     // expect([2,3,4]).toExclude(1);
    //     expect({
    //         name: 'Ankit',
    //         age: 25, 
    //         location: 'Gurugram'
    //     }).toExclude({
    //         age: 22
    //     });
    // });

});

