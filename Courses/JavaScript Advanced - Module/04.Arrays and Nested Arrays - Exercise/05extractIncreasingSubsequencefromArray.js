function extractSubsequence(arr) {
    // const subSequence = [];

    // for (const number of arr) {
    //     if (subSequence.length == 0 || subSequence[subSequence.length - 1] <= number) {
    //         subSequence.push(number);
    //     }
    // }
    // return subSequence;

  const subSequence =  arr.reduce(function(result,element) {
        if (result.length === 0 || result[result.length - 1] <= element) {
            result.push(element);
        }
        return result
    },[]);
    return subSequence;
}

console.log(extractSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]));