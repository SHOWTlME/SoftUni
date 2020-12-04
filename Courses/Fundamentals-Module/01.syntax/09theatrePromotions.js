function theatre(dayType, age) {
    let ticketPrice = 0;
    if (0 <= age && age <= 18) {
        if (dayType === `Weekday`) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`)
        } else if (dayType === `Weekend`) {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`)
        } else if (dayType === `Holiday`) {
            ticketPrice = 5;
            console.log(`${ticketPrice}$`)
        }
    } else if (18 <= age && age <= 64) {
        if (dayType === `Weekday`) {
            ticketPrice = 18;
            console.log(`${ticketPrice}$`)
        } else if (dayType === `Weekend`) {
            ticketPrice = 20;
            console.log(`${ticketPrice}$`)
        } else if (dayType === `Holiday`) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`)
        }
    } else if (64 < age && age <= 122) {
        if (dayType === `Weekday`) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`)
        } else if (dayType === `Weekend`) {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`)
        } else if (dayType === `Holiday`) {
            ticketPrice = 10;
            console.log(`${ticketPrice}$`)
        }
    } else {
        console.log(`Error!`);
    }
}
theatre(`Holiday`, 15);