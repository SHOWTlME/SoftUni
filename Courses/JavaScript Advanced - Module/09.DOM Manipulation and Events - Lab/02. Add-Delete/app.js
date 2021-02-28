function addItem() {
    const inputField = document.querySelector('#newText').value;
    const ulElement = document.querySelector('#items');

    let newLiElement = createElement('li', inputField);
    let newAnchorElement = createElement('a', '[Delete]');

    newAnchorElement.href = '#';
    newAnchorElement.addEventListener('click', onClick)

    newLiElement.appendChild(newAnchorElement);
    ulElement.appendChild(newLiElement);

    function onClick(event) {
        event.target.parentNode.remove();
    }

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}