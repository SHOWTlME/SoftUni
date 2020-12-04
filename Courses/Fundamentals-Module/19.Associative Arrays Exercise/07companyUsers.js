function companyUsers(arr) {
    let companies = {};

    for (let line of arr) {
        let [company, employee] = line.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if (!companies[company].includes(employee)) {
            companies[company].push(employee);
        }
    }

    let informationHolder = Object.entries(companies);
    informationHolder.sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => {
            let company = x[0];
            console.log(company);
            x[1].forEach(z => {
                let employeeId = z;
                console.log(`-- ${employeeId}`);
            })
        });
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);