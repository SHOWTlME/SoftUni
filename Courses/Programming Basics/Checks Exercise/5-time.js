function time(hours, minutes) {
    hours = Number(hours);
    minutes = Number(minutes);

    minutes += 15;
    hours = hours + Math.floor(minutes / 60)
    minutes = minutes % 60;
    hours = hours % 24

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);

    }


}

time("0", "01");