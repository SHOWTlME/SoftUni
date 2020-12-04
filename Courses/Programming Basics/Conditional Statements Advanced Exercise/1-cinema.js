function solve(arg1, arg2, arg3) {
    let movie = arg1;
    let rowsCount = Number(arg2);
    let columnsCount = Number(arg3);
    let totalPrice = 0;

    if (movie === "Premiere"){
        totalPrice = rowsCount * columnsCount * 12.00;
    }
    else if (movie === "Normal"){
        totalPrice = rowsCount * columnsCount * 7.50;
    }else if (movie === "Discount"){
        totalPrice = rowsCount * columnsCount * 5.00;
    }
    console.log(totalPrice.toFixed(2));
}
solve("Discount","12", "30");