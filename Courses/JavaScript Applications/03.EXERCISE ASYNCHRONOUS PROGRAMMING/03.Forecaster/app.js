function attachEvents() {
    document.querySelector('#submit').addEventListener('click', onClick);
}

async function onClick() {
    try {
        const inputField = document.querySelector('#location');
        const URL = 'http://localhost:3030/jsonstore/forecaster/locations';

        const response = await fetch(URL);
        const data = await response.json();

        const foundObject = data.find(el => el.name.toLowerCase() === inputField.value.toLowerCase());
        if (foundObject) {
            getInfo(foundObject);
        }else {
            throw new Error('Wrong city name');
        }
        inputField.value = '';
    } catch (error) {
        document.querySelector('#forecast').style.display = 'block';
       const [firstEl,secondEl] = Array.from(document.querySelectorAll('.label'));
       firstEl.textContent = 'Error';
       secondEl.textContent = '';
    }
}

async function getInfo(foundObj) {
    // making the requests
    const URL1 = `http://localhost:3030/jsonstore/forecaster/today/${foundObj.code}`;
    const URL2 = `http://localhost:3030/jsonstore/forecaster/upcoming/${foundObj.code}`;
    const [weatherToday, upcomingWeather] = await Promise.all([fetch(URL1), fetch(URL2)]);
    const _weatherToday = await weatherToday.json();
    const _upcomingWeather = await upcomingWeather.json();

    const currentWeather = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }
    // Current day forecast
    // getting DOM elements
    const forecastDiv = document.querySelector('#forecast');
    const getCurrentDay = document.querySelector('#current');
    const upcomingDiv = document.querySelector('#upcoming');

    const forecastSpan = createElement('span', '', 'class', 'condition symbol');
    forecastSpan.innerHTML = currentWeather[_weatherToday.forecast.condition];
    getCurrentDay.appendChild(forecastSpan);

    const conditionSpan = createElement('span', '', 'class', 'condition');
    const forecastData = createElement('span', _weatherToday.name, 'class', 'forecast-data');
    const _forecastData = createElement('span', `${_weatherToday.forecast.low}°/${_weatherToday.forecast.high}°`, 'class', 'forecast-data');
    const forecastData_ = createElement('span', _weatherToday.forecast.condition, 'class', 'forecast-data');

    conditionSpan.appendChild(forecastData);
    conditionSpan.appendChild(_forecastData);
    conditionSpan.appendChild(forecastData_);
    getCurrentDay.appendChild(conditionSpan);
    forecastDiv.style.display = 'block';

    // Three day forecast
    const infoDiv = createElement('div', '', 'class', 'forecast-info');
    _upcomingWeather.forecast.forEach(el => {
        const upcomingSpan = createElement('span', '', 'class', 'upcoming');
        const symbolSpan = createElement('span', '', 'class', 'condition symbol');
        symbolSpan.innerHTML = currentWeather[el.condition];

        const spanData = createElement('span', `${el.low}°/${el.high}°`, 'class', 'forecast-data');
        const textCondition = createElement('span', el.condition, 'class', 'forecast-data');

        upcomingSpan.appendChild(symbolSpan);
        upcomingSpan.appendChild(spanData);
        upcomingSpan.appendChild(textCondition);
        infoDiv.appendChild(upcomingSpan);
        upcomingDiv.appendChild(infoDiv);
    });
}

function createElement(type, content, attribute, attributeName) {
    // used to create DOM elements
    const createElement = document.createElement(type);
    if (content) {
        createElement.textContent = content;
    }
    if (attribute) {
        createElement.setAttribute(attribute, attributeName);
    }
    return createElement;
}

attachEvents();