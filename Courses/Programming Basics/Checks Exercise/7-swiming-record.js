function swimingRecord(record, distance, time) {
    record = Number(record);
    distance = Number(distance);
    time = Number(time);

    let ivanTime = distance * time;
    let slow = Math.floor(distance / 15) * 12.5;
    ivanTime += slow;
    if (ivanTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        let diff = ivanTime - record;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower`);
    }
}

swimingRecord("55555.67",
    "3017",
    "5.03");