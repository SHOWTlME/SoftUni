window.addEventListener('load', solution);

function solution() {
    const mainSection = document.querySelector('#main');
    mainSection.innerHTML = '';
    getTitle();
    mainSection.addEventListener('click', onClick);
}

async function onClick(ev) {
    if (ev.target.nodeName == 'BUTTON') {
        const URL2 = `http://localhost:3030/jsonstore/advanced/articles/details/${ev.target.id}`;
        const _response = await fetch(URL2);
        const _data = await _response.json();
        //create elements
        const extraDiv = createElement('div', '', 'extra');
        const extraPgraph = createElement('p', _data.content);

        extraDiv.appendChild(extraPgraph);
        

        
        if (ev.target.textContent == 'More' && ev.target.nodeName == 'BUTTON') {
            ev.target.parentNode.parentNode.appendChild(extraDiv);
            const getDivExtra = ev.target.parentNode.parentNode.lastChild;
            getDivExtra.style.display = 'block';
            ev.target.textContent = 'Less';
        } else if (ev.target.textContent == 'Less' && ev.target.nodeName == 'BUTTON') {
            const getDivExtra = ev.target.parentNode.parentNode.lastChild;
            getDivExtra.style.display = 'none';
            ev.target.textContent = 'More';
        }

    }
}

async function getTitle() {
    const URL1 = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(URL1);
    const data = await response.json();

    data.forEach(el => {
        const mainSection = document.querySelector('#main');
        //creating elements
        const headDiv = createElement('div', '', 'head');
        const headButton = createElement('button', 'More', 'button');
        const headSpan = createElement('span', el.title);
        const accordionDiv = createElement('div', '', 'accordion');

        headButton.setAttribute('id', el._id);
        headDiv.appendChild(headSpan);
        headDiv.appendChild(headButton);

        accordionDiv.appendChild(headDiv);
        mainSection.appendChild(accordionDiv);
    })
}


function createElement(type, content, className) {
    const createElement = document.createElement(type);
    if (content) {
        createElement.textContent = content;
    }
    if (className) {
        createElement.className = className;
    }
    return createElement;
}