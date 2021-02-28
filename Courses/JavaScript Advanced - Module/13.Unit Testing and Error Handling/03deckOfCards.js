function printDeckOfCards(cardArray) {
    let count = 0;

    function playingCards(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const objSuits = {
            'S': '\u2660',
            'H': '\u2665 ',
            'D': '\u2666 ',
            'C': '\u2663 '
        };

        if (validFaces.includes(face) === false) {
            console.log(`Invalid card: ${face}${suit}`);
            count++;
        } else if (Object.keys(objSuits).includes(suit) === false) {
            console.log(`Invalid card: ${face}${suit}`);
            count++;
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${objSuits[suit]}`
            }
        };
    }
    const result = [];
    let myDeck = '';
    for (const card of cardArray) {
        let [face, suit, check] = card.split('');
        if (check !== undefined) {
            face += suit;
            suit = check;
            result.push(playingCards(face, suit));
        } else {
            result.push(playingCards(face, suit))
        }

    }
    if (count <= 0) {
        result.forEach(el => {
            myDeck += el.toString() + ' ';
        })
        return myDeck;
    }
}

console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));