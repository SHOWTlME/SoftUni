class Company {
    constructor() {
        this.departments = [];
        this.employees = {};
    }

    addEmployee(...inputArray) {
        
        inputArray.forEach(el => {
            if (el == undefined || el == '' || el == null) {
                throw new Error('Invalid input!')
            }
        });
        if (inputArray[1] < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.employees.hasOwnProperty('department') && Object.values(this.employees).includes(inputArray[3]) === false) {
            this.employees.department = inputArray[3];
            this.employees.employees = [{username: inputArray[0],salary:inputArray[1],position:inputArray[2]}];
            this.employees.averageSalary = 0;
            this.employees.averageSalary += inputArray[1]
        }else {
            this.employees.employees.push({username: inputArray[0],salary:inputArray[1],position:inputArray[2]});
            this.employees.averageSalary += inputArray[1];
        }
        this.departments.push(this.employees);
        return `New employee is hired Name: ${inputArray[0]}. Position: ${inputArray[2]}`;
    }
    bestDepartment() {
        for (const element of this.departments) {
            console.log(element)
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
