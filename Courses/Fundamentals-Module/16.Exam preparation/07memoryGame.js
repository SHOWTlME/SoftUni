function memoryGame(arr) {
    let twins = arr.shift();
    let wrongAnswer = 0;
    for (let element of arr) {
        let [firstIndex, secondIndex] = element.split(' ');
        if (arr[firstIndex] === arr[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${arr[firstIndex]}!`);
        }else if(arr[firstIndex] !== arr[secondIndex]) {
            console.log(`Try again!`);
            wrongAnswer++;
        }else if()
    }
}
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);