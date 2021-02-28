function lastKNumberSequence(n, k) {
    let arr = [1];
    
    if (n > 1) {
        arr.push(1);
    }

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let firstNumber = arr[i];
        let secondNumber = arr[i - 1];
        let thirdNumber = arr[i - 2];

      if (secondNumber !== undefined) {
        sum += firstNumber + secondNumber
        arr.push(sum);

      } else if (secondNumber !== undefined && thirdNumber !== undefined) {
          sum += firstNumber + secondNumber + thirdNumber;
          arr.push(sum);

      } else {
          sum += firstNumber;
          arr.push(sum);
      }
    }
    console.log(arr);
}
//[1, 1, 2, 4, 7, 13]
console.log(lastKNumberSequence(6, 3));