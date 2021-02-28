(function solve () {
let str = 'my string';

String.prototype.ensureStart = function (input) {
    if (!str.startsWith(input)) {
        return str = input + ' ' + str;
    }else {
        return str;
    }
}

String.prototype.ensureEnd = function (input) {
    if (!str.endsWith(input)) {
        return str = str + ' '+ input;
    }else {
        return str;
    }
}

String.prototype.isEmpty = function () {
    if (str.length == 0) {
        return true
    }else {
        return false;
    }
}

String.prototype.truncate = function (n) {
    if (str.length < n) {
        return str;
    }else {
        str = str.slice(0,n) + '...';
        return str;
    }
}

console.log(str.truncate(3));
}());