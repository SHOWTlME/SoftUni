const { numberOperations } = require('./testingTask');
const { expect } = require('chai');

describe('todo', () => {
    it('powNumber functionality testing', () => {
        expect(numberOperations.powNumber(2)).to.equal(4);
        expect(numberOperations.powNumber(5)).to.equal(25);
    });

    it('numberChecker functionality testing', () => {
        expect(() => numberOperations.numberChecker('abc')).to.throw('The input is not a number!');
        expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
        expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!');

        expect(numberOperations.numberChecker('0')).to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker('-1')).to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');

        expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
    });

    it('sumArrays functionality testing', () => {
        expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2]);
        expect(numberOperations.sumArrays([1, 2, 1], [1, 2, 1])).to.deep.equal([2, 4, 2]);
        expect(numberOperations.sumArrays([0, -1], [0, 1])).to.deep.equal([0, 0]);
        expect(numberOperations.sumArrays([],[1])).deep.equal([1]);
    });

})