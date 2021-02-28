function subtract() {
    const firstInput = Number(document.getElementById('firstNumber').value);
    const secondInput = Number(document.getElementById('secondNumber').value);
    const result = firstInput - secondInput;
    document.getElementById('result').textContent = result;
}