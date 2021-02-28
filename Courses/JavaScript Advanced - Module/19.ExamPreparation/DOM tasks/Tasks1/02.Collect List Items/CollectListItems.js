function extractText() {
    const inputField = document.querySelector('#result');
    Array.from(document.querySelectorAll('#items li')).forEach(el => {
        inputField.value += el.textContent + '\n';
    });
}