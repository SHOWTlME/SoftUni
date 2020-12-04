function race(arr) {
    let names = arr.shift().split(', ');
    let racers = {};
    names.forEach(name => {
        racers[name] = 0;
    });

    for (const line of arr) {
        let regExpRacer = /[A-Za-z]/g;
        let match = line.match(regExpRacer).join('');

        if (racers.hasOwnProperty(match)) {
            let regExpKm = /[\d]/g;
            let secondMatch = line.match(regExpKm)
                .map(Number)
                .reduce((a, b) => a + b);
            racers[match] += secondMatch;
        }
    }
    let result = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${result[0]}`);
    console.log(`2nd place: ${result[1]}`);
    console.log(`3rd place: ${result[2]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);