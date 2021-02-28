const { isSymmetric } = require('./05checkForSymetry');
const { expect, assert } = require('chai');

describe('is array symetric', () => {
    it('returns false if argument is not array test with string', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns false if argument is not array test with number', () => {
        expect(isSymmetric(1)).to.be.false;``
    });

    it('works if two params are symetric', () => {
        expect(isSymmetric([1,1])).to.be.true;
    });

    it('doesnt work if two params are not symetric', () => {
        expect(isSymmetric([1,'1'])).to.be.false;
    });

    it('works if array has one number param', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('works if array has one string param', () => {
        expect(isSymmetric(['1'])).to.be.true;
    });

    it('works if array has no params',() => {
        expect(isSymmetric([])).to.be.true;
    });

    it('works if two string params are symetric', () => {
        expect(isSymmetric(['a','a'])).to.be.true;
    })

    it('doesnt work if two string params are not symetric', () => {
        expect(isSymmetric(['a','b'])).to.be.false;
    });

    it('returns false for non symetric input', () => {
        expect(isSymmetric([1,2])).to.be.false;
    });

    it('returns true for non symetric input with 3 params', () => {
        expect(isSymmetric([1,1,1])).to.be.true;
    });

    it ('returns false for non symetric input with 3 params', () => {
        expect(isSymmetric([1,1,2])).to.be.false;
    });
});