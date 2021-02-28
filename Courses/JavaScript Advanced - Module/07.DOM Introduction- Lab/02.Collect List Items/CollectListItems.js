function extractText() {
    const firstElement = document.getElementById('items');
    const secondElement = document.getElementById('result');
    const text = firstElement.textContent;
    secondElement.value = text;
}