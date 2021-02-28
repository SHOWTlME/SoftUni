function validate() {
    const regExp = /[a-z]+@[a-z]+\.[a-z]+/;
    const inputField = document.querySelector('#email')
    inputField.addEventListener('change', onChange);

    function onChange(event) {
        const email = event.target.value;
        if (!regExp.test(email)) {
            event.target.className = 'error';
        }else {
            event.target.className = '';
        }
    }
}