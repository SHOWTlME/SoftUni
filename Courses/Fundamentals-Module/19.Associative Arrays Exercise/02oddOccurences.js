function oddOccurences(input) {
    let words = input.toLowerCase().split(' ');
    let storage = new Map();
    let newStorage = [];

    for (const word of words) {
        if (!storage.has(word)) {
            storage.set(word, 1);
        } else {
            let currentValue = storage.get(word);
            currentValue++;
            storage.set(word, currentValue);
        }
    }

    for (const [key, value] of storage) {
        if (value % 2 !== 0) {
            newStorage.push(key);
        }
    }
    console.log(newStorage.join(' '));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');