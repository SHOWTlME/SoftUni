const { PaymentPackage } = require('./13paymentPackages');
const { expect, assert } = require('chai');

describe('class PaymentPackage tests', () => {

    it('works with constructor properties', () => {
        let instance = new PaymentPackage('Name', 123);
        expect(instance._name).to.equal('Name');
        expect(instance._value).to.equal(123);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.equal(true);
    });

    it('works with name method', () => {
        let instance = new PaymentPackage('Name', 123);
        expect(instance._name).to.equal('Name');
        instance._name = 'abc';
        expect(instance._name).to.equal('abc');
        expect(() => { instance._name = '' }).to.throw;
        expect(() => { instance._name = 123 }).to.throw;
        expect(() => { instance._name = -1 }).to.throw;
    });

    it('works with value method', () => {
        let instance = new PaymentPackage('Name', 123);
        expect(instance._value).to.equal(123);
        instance._value = 999;
        expect(instance._value).to.equal(999);
        expect(() => { instance._value = -1 }).to.throw;
        expect(() => { instance._value = 'abc' }).to.throw;
        assert.doesNotThrow(() => { instance.value = 0 });
        expect(() => { instance._value = '00' }).to.throw;
        expect(() => { instance._value = undefined }).to.throw;
    });

    it('works with VAT method', () => {
        let instance = new PaymentPackage('Name', 123);
        expect(instance._VAT).to.equal(20);
        instance._VAT = 50;
        expect(instance._VAT).to.equal(50);
        expect(() => { instance._VAT = 'abc' }).to.throw;
        expect(() => { instance._VAT = -1 }).to.throw;
        expect(() => { instance._VAT = undefined }).to.throw;

    });

    it('works with active method', () => {
        let instance = new PaymentPackage('Name', 123);
        expect(instance.active).to.equal(true);
        instance.active = false;
        expect(instance.active).to.equal(false);
        expect(() => { instance.active = 'abc' }).to.throw;
        expect(() => { instance.active = 123 }).to.throw;
        expect(() => { instance.active = undefined }).to.throw
        expect(() => { instance.active = -123 }).to.throw;
    })

    it('toString', () => {
        function getString(name, value, VAT = 20, active = true) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }

        let instance = new PaymentPackage('Name', 100);

        assert.equal(instance.toString(), getString('Name', 100));
        instance.active = false;
        assert.equal(instance.toString(), getString('Name', 100, 20, false));
        instance.VAT = 200;
        assert.equal(instance.toString(), getString('Name', 100, 200, false));
        instance.name = 'Gosho';
        assert.equal(instance.toString(), getString('Gosho', 100, 200, false));
        instance.value = 2;
        assert.equal(instance.toString(), getString('Gosho', 2, 200, false));
    });
})