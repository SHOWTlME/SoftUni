function password(input) {
    let index = 0;
    let user = input[index];
    index++;
    let password = input[index];
    index++;
    let currentPassword = input[index];
    index++;

    while (password !== currentPassword) {
        currentPassword = input[index];
        index++
    }
    console.log(`Welcome ${user}!`);
}
password(["Gosho",
    "secret",
    "secret"]);