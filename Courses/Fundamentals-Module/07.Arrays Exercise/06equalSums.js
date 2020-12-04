function equalSums(arr) {
   let leftSum = [];
   let rightSum = [];
    for(let i = 0; i < arr.length / 2; i++) {
        let result = 0;
        result += arr[i];
        leftSum.push(result);
    }
   if(arr.includes(leftSum)) {
       console.log(arr.indexOf(leftSum));
   }
}
equalSums([1, 2, 3, 3]);