function solve(area, vol, string) {
    const inputArray = JSON.parse(string);

    const result = inputArray.map(el => ({
        area: area.call(el),
        volume: vol.call(el)
    }));

    return result;
}
const jsonInput = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;

console.log(solve(area, vol, jsonInput));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
