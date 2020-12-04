function vacation(numberOfPeople, groupType, day) {
    let result = 0;

    if (day === `Friday`) {
        if (groupType === `Students`) {
            result += numberOfPeople * 8.45;
            if (numberOfPeople >= 30) {
                result *= 85 / 100;
            }
        } else if (groupType === `Business`) {
            result += numberOfPeople * 10.90;
            if (numberOfPeople >= 100) {
                result -= 10 * 10.90;
            }
        } else if (groupType === `Regular`) {
            result += numberOfPeople * 15;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                result *= 95 / 100;
            }
        }
    } else if (day === `Saturday`) {
        if (groupType === `Students`) {
            result += numberOfPeople * 9.80;
            if (numberOfPeople >= 30) {
                result *= 85 / 100;
            }
        } else if (groupType === `Business`) {
            result += numberOfPeople * 15.60;
            if (numberOfPeople >= 100) {
                result -= 10 * 15.60;
            }
        } else if (groupType === `Regular`) {
            result += numberOfPeople * 20;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                result *= 95 / 100;
            }
        }
    } else if (day === `Sunday`) {
        if (groupType === `Students`) {
            result += numberOfPeople * 10.46;
            if (numberOfPeople >= 30) {
                result *= 85 / 100;
            }
        } else if (groupType === `Business`) {
            result += numberOfPeople * 16;
            if (numberOfPeople >= 100) {
                result -= 10 * 16;
            }
        } else if (groupType === `Regular`) {
            result += numberOfPeople * 22.50;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                result *= 95 / 100;
            }
        }
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}
vacation(40, `Regular`, `Saturday`);