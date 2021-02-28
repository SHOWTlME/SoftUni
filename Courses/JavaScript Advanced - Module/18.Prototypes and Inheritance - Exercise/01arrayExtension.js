(function solve() {
    const myArr = [1,2,3];
    Array.prototype.last = function () {
        return myArr[myArr.length - 1];
    }

    Array.prototype.skip = function (n) {
        n = Number(n);
        if (!isNaN(n)) {
            return myArr.slice(n, myArr.length);
        }
    }
    
    Array.prototype.take = function (n) {
        n = Number(n);
        if (!isNaN(n)) {
            return myArr.slice(0, n);
        }
    }

    Array.prototype.sum = function () {
        let sum = 0;
        myArr.forEach(x => sum += x);
        return sum;
    }

    Array.prototype.average = function () {
        let average = 0;
        myArr.forEach(x => {
            average += x;
        })
        average = average / myArr.length;
        return average;
    }
}())

