function pirates(days, dailyPlunder, expectedPlunder) {
    let totalGain = 0;

    for (let i = 1; i <= days; i++) {
        totalGain += dailyPlunder;
        if (i % 3 === 0) {
            let fight = (dailyPlunder * 50) / 100;
            totalGain += fight;
        } else if (i % 5 === 0) {
            totalGain *= 70 / 100;
        }
    }
    if (totalGain >= expectedPlunder) {
        console.log(`Ahoy! ${totalGain.toFixed(2)} plunder gained.`);
    } else if (totalGain < expectedPlunder) {
        let percentage = (totalGain / expectedPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
pirates(10, 20, 380);