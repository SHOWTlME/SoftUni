function radiansToDegrees(radians) {
    radians = Number(radians);
    let degrees = radians *180/Math.PI;

    
    console.log(degrees.toFixed(0));
}

radiansToDegrees("6.2832");