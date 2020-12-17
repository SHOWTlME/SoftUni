function thirdProblem(arr) {
    let words = arr.shift().split(' ');
    let command = arr.shift();

    while (command !== 'Stop') {
        let tokens = command.split(' ');

        if (tokens[0] === 'Delete') {
            let index = Number(tokens[1]) + 1;
            if (index < words.length && index !== -1) {
                words.splice(index, 1);
            }
        } else if (tokens[0] === 'Swap') {
            if (words.includes(tokens[1]) && words.includes(tokens[2])) {
                let firstIndex = words.indexOf(tokens[1]);
                let secondIndex = words.indexOf(tokens[2]);
                words.splice(firstIndex, 1, tokens[2]);
                words.splice(secondIndex, 1, tokens[1]);
            }
        } else if (tokens[0] === 'Put') { // възможно е да има грешка
            let index = Number(tokens[2]) - 1;
            if (index !== -1 && index < words.length + 1) { // mahnah ravnoto
                words.splice(index, 0, tokens[1]);
            }
        } else if (tokens[0] === 'Sort') { // възможно да гръмне
            words.sort((a, b) => b.localeCompare(a));
        } else if (tokens[0] === 'Replace') {
            if (words.includes(tokens[2])) {
                let index = words.indexOf(tokens[2]);
                words.splice(index, 1, tokens[1]);
            }
        }
        command = arr.shift();
    }
    console.log(words.join(' '));
}
thirdProblem(["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"]);