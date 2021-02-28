function toggle() {
    const button = document.querySelector('.button');
    const divExtra = document.querySelector('#extra');

    divExtra.style.display = divExtra.style.display !== 'block' ? 'block' : 'none';
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
}