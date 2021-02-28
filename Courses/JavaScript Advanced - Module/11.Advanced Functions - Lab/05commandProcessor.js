function solution() {
    let word = '';
    return {
        append,
        removeStart,
        removeEnd,
        print
    };
    function append(string) {
        word += string;
    }
    function removeStart(n) {
        word = word.slice(n);
    }
    function removeEnd(n) {
        word = word.slice(0, -n);
    }
    function print() {
        console.log(word);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();