const { sum } = require('./04sumOfNumbers');
const { expect,assert } = require('chai');

describe('sum of elements', () => {
    it('sum of two elements', () => {
        expect(sum([5,5])).to.be.equal(10)
    });

    it('sum of three elements', () => {
        expect(sum([5,5,5])).to.be.equal(15);
    });

    it ('sum of string and number', () => {
        expect(sum(['1',1])).to.be.equal(2);
    });

    it ('sum of strings', () => {
        expect(sum(['1','1'])).to.be.equal(2);
    })

    it ('array with one number element', () => {
        expect(sum([1])).to.be.equal(1);
    })

    it ('array with one string element', () => {
        expect(sum(['1'])).to.be.equal(1);
    })
});