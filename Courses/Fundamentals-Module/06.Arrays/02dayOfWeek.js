function dayOfWeek(num) {
    let days = (["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"]);

    let result = '';
    for (let i = 1; i < days.length; i++) {
        if (num >= 1 && num <= 7) {
            console.log(days[num - 1]);
            break;
        } else {
            console.log(`Invalid day!`);
            break;
        }
    }
}
dayOfWeek(7);
dayOfWeek(6);
dayOfWeek(3);
dayOfWeek(213213);