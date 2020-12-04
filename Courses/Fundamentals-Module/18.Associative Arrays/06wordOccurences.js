function wordOccurences(arr) {
    let words = new Map();

    for (const element of arr) {
        if (words.has(element)) {
            let value = words.get(element);

            value = value + 1;
            words.set(element, value);
        } else {
            words.set(element, 1);
        }
    }
    let updatedArr = Array.from(words).sort(([wordA, valueA], [wordB, valueB]) => valueB - valueA);;

    for (const element of updatedArr) {
        console.log(`${element[0]} -> ${element[1]} times`);
    }
}
wordOccurences(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another",
    "sentence", "And", "finally",
    "the", "third", "sentence"]);