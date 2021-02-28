function listOfNames(arr) {
    const sorted = arr.sort((a, b) => a.localeCompare(b));
    let numberedList = '';
    let count = 1;

    sorted.forEach(x => {
        numberedList += `${count}.${x}\n`;
        count++
    });

    return numberedList;
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));