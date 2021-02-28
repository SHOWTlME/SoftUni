function cookingByNumbers(num, operation1, operation2, operation3, operation4, operation5) {
    let arr = [];
    let holder = '';
    num = Number(num);
    arr.push(operation1, operation2, operation3, operation4, operation5);
    for (const operation of arr) {
        if (operation === 'chop') {
            num = num / 2;
            holder += `${Math.abs(num)}\n`;
        } else if (operation === 'dice') {
            num = Math.sqrt(Math.abs(num));
            holder += `${Math.abs(num)}\n`;
        } else if (operation === 'spice') {
            num = 1 + num;
            holder += `${Math.abs(num)}\n`;
        } else if (operation === 'bake') {
            num = num * 3;
            holder += `${Math.abs(num)}\n`;
        } else if (operation === 'fillet') {
            num = (num * 0.2) - num;
            holder += `${Math.abs(num)}\n`;
        }
    }
    return holder;
}

console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));