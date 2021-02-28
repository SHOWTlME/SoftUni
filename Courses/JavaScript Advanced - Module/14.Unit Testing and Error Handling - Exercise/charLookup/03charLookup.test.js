const { lookupChar } = require('./03charLookup');
const { expect } = require('chai');

describe('tests for function: lookupChar', () => {
    it('doesnt work if parameters are from the incorect type', () => {
        expect(lookupChar(123, "asd")).to.be.undefined;
        expect(lookupChar('asd','asd')).to.be.undefined;
        expect(lookupChar(123,123)).to.be.undefined;
        expect(lookupChar('asd',1.2)).to.be.undefined;
    });
    
    it('doesnt work if the string length is out of range', () => {
        expect(lookupChar('asd', 4)).to.equal('Incorrect index');
        expect(lookupChar('asd', 3)).to.equal('Incorrect index');
        expect(lookupChar('asd', -1)).to.equal('Incorrect index');
        expect(lookupChar('',0)).to.equal('Incorrect index');
    });

    it('works with correct input', () => {
        expect(lookupChar('asd', 0)).to.equal('a');
        expect(lookupChar('asd',2)).to.equal('d');
    })
});