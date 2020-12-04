function figures (arg1, arg2, arg3){
    let type = arg1;
    
    if (type == "square") {
        let sideA = Number(arg2);
        let res = sideA * sideA;
        console.log(res.toFixed(3));
    }else if (type == "rectangle"){
    let sideA = Number(arg2);
    let sideB = Number(arg3);
    let res = sideA * sideB;
    console.log(res.toFixed(3));
} else if (type == "circle"){
    let r = Number(arg2);
    let res = Math.PI * r * r;
    console.log(res.toFixed(3));
} else if (type == "triangle"){
    let sideA = Number(arg2);
    let sideB = Number(arg3);
    let res = (sideA * sideB) / 2;
    console.log(res.toFixed(3));
}
}
figures("triangle", "4.5", "20");