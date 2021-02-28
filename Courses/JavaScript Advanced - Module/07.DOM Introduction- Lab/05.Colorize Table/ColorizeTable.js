function colorize() {
    let arr = Array.from(document.querySelectorAll('tr'));
    for(let i = 1; i < arr.length; i+= 2) {
        const currentElement = arr[i];
        currentElement.style.backgroundColor = 'Teal';
    }
}