function password(arr) {
    let password = arr.shift();
    let command = arr.shift();

    while (command !== 'Done') {
        let tokens = command.split(' ');

        if (command === 'TakeOdd') {
            let concat = '';

            for (let i = 1; i < password.length; i += 2) {
                concat += password[i];
            }
            password = concat;
            console.log(password);
        } else if (tokens[0] === 'Cut') {
            const firstIndex = Number(tokens[1]);
            const secondIndex = Number(tokens[2]);
            let word = password.substring(firstIndex, firstIndex + secondIndex);

            password = password.replace(word, '');
            console.log(password);
        }
        if (tokens[0] === 'Substitute') {
            let index = password.indexOf(tokens[1]);
            if (index !== -1) {
                let reg = new RegExp(`${tokens[1]}`, `g`);

                password = password.replace(reg, tokens[2]);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
        command = arr.shift();
    }
    console.log(`Your password is: ${password}`);
}
password([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]);
