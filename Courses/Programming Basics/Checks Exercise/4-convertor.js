function convertor(n, unitIn, unitOut) {
    n = Number(n);
    let result = n;

    if (unitIn === "m") {
        if (unitOut === "mm") {
            result = n * 1000;
        } else if (unitOut === "cm") {
            result = n * 100;
        }if (unitIn === "mm") {
            if (unitOut === "m") {
                result = n / 1000;
            } else if (unitOut === "cm") {
                result = n / 10;
            } if (unitIn === "cm") {
                if (unitOut === "m") {
                    result = n / 100;
                } else if (unitOut === "mm") {
                    result = n * 10;
                }
            }
        }
    } console.log(result.toFixed(3));

}
convertor("150", "m", "cm");
convertor("45", "cm", "mm");
convertor("12", "mm", "m");

