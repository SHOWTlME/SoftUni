function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const selectTrElements = Array.from(document.querySelectorAll('tbody tr'));
    const resultDiv = document.querySelector('#result');
    let isTrue = true;

    for (const tr of selectTrElements) {
        if (tr.children[1].textContent === email) {
            tr.parentNode.removeChild(tr);
            resultDiv.textContent = 'Deleted.'
            isTrue = false;
        }
    }
    if (isTrue) {
        resultDiv.textContent = 'Not found.'
    }
}