function lowerToUpper(char) {
    let upperCase = char.toUpperCase();
    
    if (upperCase === char) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}
lowerToUpper('a');
lowerToUpper(`L`);