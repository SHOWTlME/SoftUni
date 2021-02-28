const { mathEnforcer } = require('./04mathEnforcer');
const { expect } = require('chai');

describe('testing function:addFive from the object', () => {
    it('doesnt work if the parameter is not a number', () => {
        expect(mathEnforcer.addFive('a')).to.be.undefined;
    });

    it('works with correct parameters', () => {
        expect(mathEnforcer.addFive(5), 'With positive numbers').to.equal(10);
        expect(mathEnforcer.addFive(1.1), 'With floating point numbers').to.equal(6.1);
        expect(mathEnforcer.addFive(-1), 'With negative numbers').to.equal(4);
        expect(mathEnforcer.addFive(-1.1), 'With negative floating point numbers').to.equal(3.9);
    });
});

describe('testing function: subtract ten', () => {
    it('doesnt work if the parameter is not a number', () => {
        expect(mathEnforcer.subtractTen('a')).to.be.undefined;
    });

    it('works with correct parameters', () => {
        expect(mathEnforcer.subtractTen(10), 'testing positive numbers').to.equal(0);
        expect(mathEnforcer.subtractTen(15.1), 'testing with positive floating point numbers').to.equal(5.1);
        expect(mathEnforcer.subtractTen(-5), 'testing with negative numbers').to.equal(-15);
        expect(mathEnforcer.subtractTen(-5.5), 'testing with negative floating point numbers').to.equal(-15.5);
    });
});

describe('testing function: sum', () => {
    it('doesnt work if the parameters are not a number', () => {
        expect(mathEnforcer.sum('a',1)).to.be.undefined;
        expect(mathEnforcer.sum(1,'a')).to.be.undefined;
        expect(mathEnforcer.sum('a','a')).to.be.undefined;
    });

    it ('works with correct parameters', () => {
        expect(mathEnforcer.sum(1,1)).to.equal(2);
        expect(mathEnforcer.sum(1.1,1.1)).to.equal(2.2);
        expect(mathEnforcer.sum(-1,-1)).to.equal(-2);
        expect(mathEnforcer.sum(-1.1,-1.1)).to.equal(-2.2);
    });
});