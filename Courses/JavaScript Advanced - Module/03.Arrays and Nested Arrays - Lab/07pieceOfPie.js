function pieceOfPie(arr, firstFlavour, secondFlavour) {
    const finalRecepie = [];
    let isTrue = false;
    
    for (const element of arr) {
        if (element === firstFlavour) {
            finalRecepie.push(element);
            isTrue = true;
        } else if (element === secondFlavour) {
            finalRecepie.push(element);
            break;
        } else if (isTrue) {
            finalRecepie.push(element);
        }
    }

    return finalRecepie;
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));