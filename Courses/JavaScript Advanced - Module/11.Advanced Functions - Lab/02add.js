function solve(num) {
    let sum = num;

    function add(myNum) {
        const result = sum + myNum;
        return result;
    }
    return add;
}

let add5 = solve(7);
console.log(add5(2));
console.log(add5(3));