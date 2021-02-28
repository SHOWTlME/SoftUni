function sumTable() {
    const result = document.querySelector('#sum');
    let sum = 0;
    const firstTable = Array.from(document.querySelectorAll('table tr')).forEach(x => {
        let currentElement = Number(x.children[1].textContent);
        if (!isNaN(currentElement)) {
            sum += currentElement;
        }
    });
    result.textContent = sum;
}