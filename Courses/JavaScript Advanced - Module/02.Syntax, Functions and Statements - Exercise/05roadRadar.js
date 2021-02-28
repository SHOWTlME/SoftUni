function roadRadar(speed, area) {
    let speeding = 0;
    let speedLimit = 0;

    switch (area) {
        case 'city': speedLimit = 50;
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else if (speed > speedLimit) {
                speeding = speed - speedLimit;
            }; break;
        case 'motorway': speedLimit = 130;
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else if (speed > speedLimit) {
                speeding = speed - speedLimit;
            }; break;
        case 'interstate': speedLimit = 90;
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else if (speed > speedLimit) {
                speeding = speed - speedLimit;
            }; break;
        case 'residential': speedLimit = 20;
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else if (speed > speedLimit) {
                speeding = speed - speedLimit;
            }; break;
    }

    if (speeding <= 20) {
        return `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - speeding`;
    } else if (speeding <= 40) {
        return `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`;
    } else if (speeding > 40) {
        return `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - reckless driving`;
    }
}

console.log(roadRadar(1, 'city'));
console.log(roadRadar(1, 'residential'));
console.log(roadRadar(1, 'interstate'));
console.log(roadRadar(1, 'motorway'));
