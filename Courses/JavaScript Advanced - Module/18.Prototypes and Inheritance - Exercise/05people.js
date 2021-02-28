function company() {
    const responsabilities = {
        junior:
            [" is working on a simple task."],
        senior:
            [" is working on a complicated task."," is taking time off work."," is supervising junior workers."],
        manager:
            [" scheduled a meeting."," is preparing a quarterly report."]
    }

    class Employee {
        #index
        constructor(name, age, tasks) {
            this.name = name;
            this.age = age;
            this.tasks = tasks;
            this.salary = 0;
            this.#index = 0;
            this.dividend = 0;
        }

        work() {
            if (this.#index == this.tasks.length) {
                this.#index = 0;
            }
            console.log(this.name + this.tasks[this.#index]);
            this.#index++;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, responsabilities.junior);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, responsabilities.senior);
        }
    }

    class Manager extends Employee {
        constructor(name, age, dividend) {
            super(name, age, responsabilities.manager, dividend);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }
}

let myCompany = company();
let Company = new myCompany.Manager('SwagLord', 21);
Company.collectSalary();