function sortArrByCriteria(arr) {
    let sortByLength = arr.sort((a, b) => {
        if (a.length < b.length) {
            if (a < b) {
                return -1;
            }else {
                return 1
            }
            
        }
    });
    // sortByAplhabet = sortByLength.sort((a,b) =>{
    //     let firstElement = a.toUpperCase();
    //     let secondElement = b.toLowerCase();

    //     if(firstElement > secondElement) {
    //         return -1
    //     }else {
    //         return 1;
    //     }
    // });
    return sortByLength.join('\n');
}
console.log(sortArrByCriteria(['test', 'Deny', 'omen', 'Default']));