function getInfo() {
    const inputBusId = document.querySelector('#stopId');
    const divStopName = document.querySelector('#stopName');
    const arrivingBusesUl = document.querySelector('#buses');
    const URL = `http://localhost:3030/jsonstore/bus/businfo/${inputBusId.value}`;

    fetch(URL).then(response => response.json().then(data => {
        inputBusId.value = '';
        arrivingBusesUl.innerHTML = '';
        const stopName = data.name;
        divStopName.textContent = stopName;

        Object.entries(data.buses).forEach(arr => {
            const [busNumber,arrivalTime] = arr;
            const content = `Bus ${busNumber} arrives in ${arrivalTime}`;
            const liElement = createElement('li',content);
            arrivingBusesUl.appendChild(liElement);
        })
    })).catch(error => {
        divStopName.textContent = 'Error';
    })
}

function createElement(type, content) {
    const createElement = document.createElement(type);
    if (content) {
       createElement.textContent = content;
    }
    return createElement;
 }