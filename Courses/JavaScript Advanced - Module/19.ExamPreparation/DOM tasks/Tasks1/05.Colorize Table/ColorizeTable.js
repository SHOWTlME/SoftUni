function colorize() {
    const tdElements = Array.from(document.querySelectorAll('table tr'));

    for (let i = 1; i < tdElements.length; i++) {
        if (i % 2 !== 0) {
            tdElements[i].style.backgroundColor = 'teal';
        }
    }
}