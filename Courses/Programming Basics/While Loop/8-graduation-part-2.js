function graduation(input) {
    let level = 1;
    let error = 0;
    let index = 0;
    let name = input[index];
    index++;
    let score = 0;

    while (level <= 12) {
        let grade = Number(input[index]);
        index++
        if (grade >= 4) {
            score += grade;
            level++
        } else {
            error += 1;
            if (error > 1) {
                console.log(`${name} has been excluded at ${level} grade`);
                break;
            }
        }
    }
    if(level > 12){
        console.log(`${name} graduated. Average grade: ${(score / 12).toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);