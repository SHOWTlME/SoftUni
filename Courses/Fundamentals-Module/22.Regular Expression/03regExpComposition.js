function regExComposition(year) {
    let pattern = /(?<Day>\d{2})([.\/-])(?<Month>[A-Z][a-z]{2})\2(?<Year>\d{4})\b/g;


    let current = pattern.exec(year);

    while (current !== null) {
        console.log(`Day: ${current[1]}, Month: ${current[3]}, Year: ${current[4]}`);
        current = pattern.exec(year);
    }
}
regExComposition(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016']);