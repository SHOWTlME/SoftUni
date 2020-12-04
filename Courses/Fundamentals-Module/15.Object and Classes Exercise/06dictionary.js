function dictionary(arr) {
    let newArr = [];
    arr.sort();
    for (let element of arr) {
        let obj = JSON.parse(element);
        let keys = Object.keys(obj);
        for (const key of keys) {
            if (key !== keys) {
            console.log(`Term: ${key} => Definition: ${obj[key]}`);
            }
        }
        
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);