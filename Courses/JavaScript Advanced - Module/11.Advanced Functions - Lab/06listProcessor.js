function listProcessor(arrayOfCommands) {
    const commandObject = {};

    for (const command of arrayOfCommands) {
        const [currentCommand, currentWord] = command.split(' ');
        if (currentCommand === 'add') {
            add(currentWord);
        } else if (currentCommand === 'remove') {
            remove(currentWord);
        }
    }

    function add(word) {
        commandObject[word] = word;
    }

    function remove(word) {
        delete commandObject[word];
    }

    function print() {

    }

}
console.log(listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']));