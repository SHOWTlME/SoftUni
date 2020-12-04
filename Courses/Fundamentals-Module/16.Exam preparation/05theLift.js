function theLift(input) {
    let queue = input.shift();
    let filledWagons = [];
    queue = Number(queue);
    input = input[1].split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let currentWagon = input[i];

        if (currentWagon >= 0) {
            let maxCapacity = 4 - currentWagon;
            if (queue < 4 && queue > 0) {
                currentWagon += queue;
                queue -= currentWagon;
                filledWagons.push(currentWagon);
            } else if (queue > 0) {
                currentWagon += maxCapacity;
                queue -= maxCapacity;
                filledWagons.push(currentWagon);
            } else if (currentWagon === 0) {
                currentWagon += 4;
                if (queue < 4) {
                    currentWagon = queue;
                }
                queue -= currentWagon;
                filledWagons.push(currentWagon);
            }
            else {
                filledWagons.push(currentWagon);
            }
        }
    }

    for (let j = filledWagons.length - 1; j > 0; j--) {
        if (queue <= 0 && filledWagons[j] < 4) {
            console.log(`The lift has empty spots!`);
            break;
        } else if (queue > 0 && filledWagons[j] === 4) {
            console.log(`There isn't enough space! ${queue} people in a queue!`);
            break;
        } else if (queue === 0 && filledWagons[j] === 4) {
            break;
        }
    }
    console.log(filledWagons.join(' '));
}
theLift([
    "1001",
    "1000 1000"
]);