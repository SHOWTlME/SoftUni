function subtract() {
    const firstInputField = document.querySelector('#firstNumber');
    const secondInputField = document.querySelector('#secondNumber');
    const resultDiv = document.querySelector('#result');

    resultDiv.textContent = Number( firstInputField.value) - Number(secondInputField.value);
}