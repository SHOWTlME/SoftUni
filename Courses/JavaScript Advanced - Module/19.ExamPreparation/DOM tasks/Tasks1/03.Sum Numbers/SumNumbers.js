function calc() {
    const firstInputField = document.querySelector('#num1');
    const secondInputField = document.querySelector('#num2');
    const resultField = document.querySelector('#sum');

    resultField.value = Number(firstInputField.value) + Number(secondInputField.value);
}
