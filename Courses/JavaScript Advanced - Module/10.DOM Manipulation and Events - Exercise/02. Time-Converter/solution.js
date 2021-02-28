function attachEventsListeners() {
    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');

    Array.from(document.querySelectorAll('input[type="button"]')).forEach(el => {
        el.addEventListener('click', onClick);
    });
    
    let daysNum;
    let hours;
    let minutes;
    let seconds;

    function onClick(event) {

        if (event.target.id === 'daysBtn') {
            daysNum = Number(inputDays.value)
            inputHours.value = daysNum * 24;
            inputMinutes.value = daysNum * 1440;
            inputSeconds.value = daysNum * 86400;
        }
        else if (event.target.id === 'hoursBtn') {
            hours = Number(inputHours.value);
            inputDays.value = hours / 24;
            inputMinutes.value = 60 * hours;
            inputSeconds.value = 60 * 60 * hours;
        }
        else if (event.target.id === 'minutesBtn') {
            minutes = Number(inputMinutes.value);
            inputDays.value = (minutes / 60) / 24;
            inputHours.value = minutes / 60;
            inputSeconds.value = minutes * 60;
        }
        else if (event.target.id === 'secondsBtn') {
            seconds = Number(inputSeconds.value);
            inputDays.value = ((seconds / 60) / 60) / 24;
            inputHours.value = (seconds / 60) / 60;
            inputMinutes.value = seconds / 60;
        }
    }
}