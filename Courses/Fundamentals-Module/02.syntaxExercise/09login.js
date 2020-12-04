function login(input) {
    let username = input.shift();
    let pass = username.split(``).reverse().join(``);

    for (let i = 0; i < input.length; i++) {
        if (input[i] === pass) {
            console.log(`User ${username} logged in.`)
        } else {
            if (i === 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`)
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);