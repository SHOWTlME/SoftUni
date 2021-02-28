function biggerHalf (arr) {
    let sorted = arr.sort((a,b) => b - a);
    let sliced = sorted.slice(0, Math.ceil(arr.length / 2)).sort((a,b) => a - b);
    
    return sliced;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));