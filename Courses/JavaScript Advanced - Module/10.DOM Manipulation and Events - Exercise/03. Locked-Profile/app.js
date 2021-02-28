function lockedProfile() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick (event) {
        if(event.target.tagName === 'BUTTON') {
            const profile = event.target.parentNode;
            const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock';

            if (isLocked) {
                return;
            }
            let div = profile.querySelector('div');
            let isVisible = div.style.display === 'block';
            div.style.display = isVisible ? 'none' : 'block';

            event.target.textContent = !isVisible ? 'Hide it' : 'Show more';
        }
    }
}