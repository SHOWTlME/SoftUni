function encodeAndDecodeMessages() {
    const encodeInputField = document.querySelectorAll('textarea')[0];
    const decodeInputField = document.querySelectorAll('textarea')[1];

    document.querySelectorAll('button')[0].addEventListener('click', onClick);
    function onClick() {
        const message = encodeInputField.value
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1));
        decodeInputField.value = message.join('');
        encodeInputField.value = '';
    }

    document.querySelectorAll('button')[1].addEventListener('click', clickMe);
    function clickMe() {
        const message = decodeInputField.value
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) - 1));
        decodeInputField.value = message.join('');
    }

}