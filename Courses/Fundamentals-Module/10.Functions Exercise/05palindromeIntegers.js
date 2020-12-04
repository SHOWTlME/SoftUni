function palindromeIntegers(arr) {
    
    let result = '';
    for (let num of arr) {
        let isPolindrome = 'true';
        num = String(num);
        let mid = parseInt(arr.length / 2);
        for (let i = 0; i <= mid; i++) {
            let lastDigit = num.length - 1
            if (num[i] !== num[lastDigit - i]) {
                isPolindrome = false;
                break;
            }
        }

        result += isPolindrome + '\n';
    }

    return result;

}
console.log(palindromeIntegers([123, 323, 421, 121]));