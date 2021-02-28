function fromJSONToHTMLTable(jsonInput) {
    let studentsInfo = JSON.parse(jsonInput);
    let html = '<table>\n   ';
    html += `<tr><th>Name</th><th>Score</th><th>Grade</th></tr>\n     `;

    for (const student of studentsInfo) {
        let keys = Object.keys(student);
        for (const key of keys) {
            html += `<tr><th>${key}</th>`;
            console.log(`${key} ${student[key]}`);
        }
    }
}
console.log(fromJSONToHTMLTable('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]'));

