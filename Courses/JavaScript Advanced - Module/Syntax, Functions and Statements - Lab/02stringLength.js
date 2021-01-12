function stringLength(arg, arg1, arg2) {
    let sum = 0;
    sum += arg.length + arg1.length + arg2.length;
    let averageLength = sum / 3;
    console.log(sum);
    console.log(Math.floor(averageLength));
}
stringLength('pasta', '5', '22.3');