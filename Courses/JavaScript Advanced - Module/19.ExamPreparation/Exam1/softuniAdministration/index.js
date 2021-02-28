function solve() {
    const formControls = document.querySelectorAll('.from-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = formControls[2];

    function createElement(type,textContent) {
        let element = document.createElement(type);
        if (textContent) {
            element.textContent = textContent;
        }
    }

    function add() {
        
    }

    document.domain.addEventListener('click', (e) => {
        if (e.target.tagName = 'BUTTON') {
            return;
        }
        if (e.target.textContent == 'Del') {

        }else if (e.target.textContent == 'Add') {
            e.preventDefault();
            add();
        }
    })
}