function fromNToM (num1, num2) {
    let m = Number(num1);
    let n = Number(num2);

    while (m >= n) {
        console.log(m);
        m--;
    }
}
fromNToM(6, 2);
fromNToM(4, 1);

function fromNToM2 (num1, num2) {
    let m = Number(num1);
    let n = Number(num2);

    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}
fromNToM2(6,2);
fromNToM2(4, 1);