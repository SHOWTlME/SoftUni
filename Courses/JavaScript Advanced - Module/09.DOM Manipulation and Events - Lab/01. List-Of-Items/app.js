function addItem() {
    const inputField = document.querySelector('#newItemText').value;
    const ulElement = document.querySelector('#items');
    let newLiElement = document.createElement('li');
    
    newLiElement.textContent = inputField;
    ulElement.appendChild(newLiElement);
}