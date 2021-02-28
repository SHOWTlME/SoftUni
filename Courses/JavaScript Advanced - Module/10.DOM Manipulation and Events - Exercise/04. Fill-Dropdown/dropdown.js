function addItem() {
    const textInputField = document.getElementById('newItemText');
    const valueInputField = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');
    const newOption = document.createElement('option');

    newOption.textContent = textInputField.value;
    newOption.value = valueInputField.value;
    selectElement.appendChild(newOption);


    textInputField.value = '';
    valueInputField.value = '';
}