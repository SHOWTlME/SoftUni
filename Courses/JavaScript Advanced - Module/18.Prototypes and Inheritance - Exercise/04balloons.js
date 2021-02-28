function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        #ribbon
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this.#ribbon = { color: this.ribbonColor, length: this.ribbonLength };
        }

        get ribbon() {
            return this.#ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        #text
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this.#text = text;
        }

        get text() {
            return this.#text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon,
    }
}
let myFunc = solve();
let party = new myFunc.PartyBalloon('red',10)
console.log(party.color);