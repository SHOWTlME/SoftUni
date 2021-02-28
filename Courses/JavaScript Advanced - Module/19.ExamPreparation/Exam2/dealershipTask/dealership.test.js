const { dealership } = require('./03dealership');
const { expect } = require('chai');

describe('testing dealership object', () => {

    describe('testing newCarCost object property', () => {
        it('works with new car models and old car models', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        });
    });

    describe('testing carEquipment object property', () => {
        it('returns array with chosen extras', () => {
            expect(dealership.carEquipment(['a'],[0])).to.deep.equal(['a']);
            expect(dealership.carEquipment(['1','2','3','4'],[0,,1])).to.deep.equal(['1','2']);
        });
    });

    describe('testing euroCategory object property', () => {
        it('returns how much you have to pay', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        });
    });

})