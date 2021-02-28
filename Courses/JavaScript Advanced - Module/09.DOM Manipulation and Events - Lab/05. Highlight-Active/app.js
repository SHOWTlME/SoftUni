function focus() {
     Array.from(document.querySelectorAll('input')).forEach(ev => {
         ev.addEventListener('focus', onFocus);
         ev.addEventListener('blur', onBlur);
     });
    
    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }
    function onBlur(event) {
        event.target.parentNode.className = '';
    }
}