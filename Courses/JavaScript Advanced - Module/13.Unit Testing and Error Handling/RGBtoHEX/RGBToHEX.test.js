const { rgbToHexColor } = require('./RGBToHEX');
const { expect } = require('chai');

describe('function valid color testing', () => {
    it('works with valid integers', () => {
        expect(rgbToHexColor(2, 0, 252)).to.equal('#0200FC');
    });

    it('doesnt work if input is string', () => {
        expect(rgbToHexColor('a', 0, 252)).to.undefined;
    });

    it('doesnt work if input is string', () => {
        expect(rgbToHexColor(0, 'a', 252)).to.undefined;
    });

    it('doesnt work if input is string', () => {
        expect(rgbToHexColor(150, 0, 'a')).to.undefined;
    });

    it('doesnt work if input integers are out of maxRange', () => {
        expect(rgbToHexColor(2, 0, 256)).to.undefined;
    });

    it('doesnt work if input integers are out of maxRange', () => {
        expect(rgbToHexColor(2, 256, 150)).to.undefined;
    });

    it('doesnt work if input integers are out of maxRange', () => {
        expect(rgbToHexColor(256, 0, 150)).to.undefined;
    });

    it('doesnt work if input integers are out of minimum range', () => {
        expect(rgbToHexColor(2, -1, 155)).to.undefined;
    });

    it('doesnt work if input integers are out of minimum range', () => {
        expect(rgbToHexColor(2, 2, -1)).to.undefined;
    });

    it('doesnt work if input integers are out of minimum range', () => {
        expect(rgbToHexColor(-1, 2, 155)).to.undefined;
    });

    it('doesnt work if integers are equal to the limit', () => {
        expect(rgbToHexColor(255, 255, 255)).to.undefined;
    })

    it('doesnt work with string integers', () => {
        expect(rgbToHexColor('155','155','155')).to.undefined;
    })

});