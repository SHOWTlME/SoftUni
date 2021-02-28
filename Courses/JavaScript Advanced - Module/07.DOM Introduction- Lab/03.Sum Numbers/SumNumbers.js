function calc() {
    const firstInput = Number(document.getElementById('num1').value);
    const secondInput = Number(document.getElementById('num2').value);
    const result = firstInput + secondInput;
    document.getElementById('sum').value = result;
}
