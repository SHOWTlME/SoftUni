function fromNToK(n, k) {

    let newArr = [1];
    for (let i = 1; i < n; i++) {
        let lastK = newArr.slice(-k);
        let sum = 0;
        for (let num of lastK) {
            sum += num;
        }

        newArr.push(sum);
    }

    console.log(newArr.join(' '));

}

fromNToK(6, 3);