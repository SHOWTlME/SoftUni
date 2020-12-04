function employeesInformation(arr) {
    let listOfEmployees = {};

    for (let employee of arr) {
        listOfEmployees[employee] = employee.length
    }

    let employeeKeys = Object.keys(listOfEmployees);

    for (let key of employeeKeys) {
        console.log(`Name: ${key} -- Personal Number: ${key.length}`);
    }
}
employeesInformation([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);