const { isOddOrEven } = require('./evenOrOdd');
const { expect } = require('chai');

describe('tests for evenOrOdd function', () => {
    it ('does not work if input parameter is number', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it ('works if the length of the parameter is even', () => {
        expect(isOddOrEven('as')).to.equal('even');
        expect(isOddOrEven('')).to.equal('even');
    });
    it ('works if the length of the parameter is odd', () => {
        expect(isOddOrEven('asd')).to.equal('odd');
        expect(isOddOrEven('a')).to.equal('odd');
    });
});