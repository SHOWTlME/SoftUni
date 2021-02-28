function filterEmployees(input, criteria) {
    const employees = JSON.parse(input);
    const [sortingCriteria, sortingInfo] = criteria.split('-');
    let counter = 0;
    let sortedliOfEmployees = '';

        if (criteria !== 'all') {
            employees.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]))
                .forEach(employee => {
                    if (employee[sortingCriteria] === sortingInfo) {
                        sortedliOfEmployees += `${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}\n`;
                        counter++;
                    }
                });

        }else {
            employees.forEach(employee => {
                    sortedliOfEmployees += `${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}\n`;
                    counter++;
            });
        }

    console.log(sortedliOfEmployees);
}
const jsonInput = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;
const sortingCriteria = 'gender-Female';
console.log(filterEmployees(jsonInput, sortingCriteria));

