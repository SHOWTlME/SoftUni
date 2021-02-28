function validate() {
    const inputField = document.querySelector('#email');
    const validationPattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    inputField.addEventListener('change', () => {
        if (!validationPattern.test(inputField.value)) {
            inputField.classList.add('error');
        } else {
            inputField.removeAttribute('class');
        }
    });
}