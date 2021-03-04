function solve() {
    const stopInfo = document.querySelector('#info span');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    let stop = {
        next: 'depot',
    }

    async function depart() {
        try {
            const URL = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
            const myPromise = await fetch(URL);
            const myData = await myPromise.json();

            stop = myData;
            stopInfo.textContent = `Next stop ${stop.name}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            stopInfo.textContent = 'Error';

            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }
    function arrive() {
        stopInfo.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
    
    return {
        depart,
        arrive
    };
}

let result = solve();