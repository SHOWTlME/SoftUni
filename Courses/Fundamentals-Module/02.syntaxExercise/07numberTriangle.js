function triangle(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let stringContainer = "";
        sum += 1;
        
        for (let j = 1; j <= i; j++) {
            stringContainer += sum.toString() + " ";
        }
        console.log(stringContainer);
    }
}
triangle(3);