const { expect } = require('chai');
const { pizzUni } = require('./03pizzaPlace');


describe('pizzuni obj tests', () => {
    it('testing makeAnOrder functionality', () => {
        const myPizza = {orderedPizza: 'Pizza', orderedDrink: 'drink'};
        const myPizza2 = {orderedPizza: 'Pizza'};
        const myPizza3 = {orderedDrink: 'Drink'};
        const myPizza4 = {};

        expect(() => pizzUni.makeAnOrder(myPizza3)).to.Throw('You must order at least 1 Pizza to finish the order.'); 
        expect(() => pizzUni.makeAnOrder(myPizza4)).to.throw('You must order at least 1 Pizza to finish the order.');

        expect(pizzUni.makeAnOrder(myPizza)).to.equal(`You just ordered ${myPizza.orderedPizza} and ${myPizza.orderedDrink}.`);
        expect(pizzUni.makeAnOrder(myPizza2)).to.equal(`You just ordered ${myPizza2.orderedPizza}`);
    });

    it('testing getRemainingWork functionality', () => {
        const myPizza1 = [{pizzaName: 'Pizza',status:'ready'}];
        const myPizza2 = [{pizzaName: 'Pizza', status:'preparing'}];
        const myPizza3 = [{pizzaName: 'Pizza1',status:'ready'},{pizzaName: 'Pizza2',status:'preparing'}];

        expect(pizzUni.getRemainingWork(myPizza1)).to.equal('All orders are complete!');

        expect(pizzUni.getRemainingWork(myPizza2)).to.equal(`The following pizzas are still preparing: Pizza.`);
        expect(pizzUni.getRemainingWork(myPizza3)).to.equal(`The following pizzas are still preparing: Pizza2.`);
    });

    it('testing orderType functionality', () => {
        expect(pizzUni.orderType(10,'Delivery')).to.equal(10);
        expect(pizzUni.orderType(10,'Carry Out')).to.equal(9);
    });

})