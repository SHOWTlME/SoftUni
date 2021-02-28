function toggle() {
    const divElement = document.querySelector('#extra');
    const spanElement = document.querySelector('.button');

    if (divElement.style.display === 'none') {
        divElement.style.display = 'block';
        spanElement.textContent = 'Less';
    } else {
        divElement.style.display = 'none';
        spanElement.textContent = 'More';
    }
}