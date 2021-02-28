class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity <= 0) {
            throw new Error('Not enough parking space.');
        } else {
            this.vehicles.push({ carModel, carNumber, payed: 'false' });
            this.capacity--;
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }
    }

    removeCar(carNumber) {
        const carIndex = this.vehicles.findIndex(car => car.carNumber == carNumber);
        if (carIndex == - 1) {
            throw new Error("The car, you're looking for, is not found.");
        } else if (this.vehicles[carIndex].payed == 'false') {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles.splice(carIndex, 1);
            return `${carNumber} left the parking lot.`
        }
    }

    pay(carNumber) {
        const carIndex = this.vehicles.findIndex(car => car.carNumber == carNumber);
        if (carIndex == - 1) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else if (this.vehicles[carIndex].payed == 'true') {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        } else {
            this.vehicles[carIndex].payed = 'true';
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            const firstLIne = [`The Parking Lot has ${this.capacity} empty spots left.`];
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            this.vehicles.forEach(car => {
                firstLIne.push(`${car.carModel} == ${car.carNumber} - ${car.payed == 'true' ? 'Has payed' : 'Not payed'}`);
            })
            return firstLIne.join('\n');
        } else {
            const carIndex = this.vehicles.findIndex(car => car.carNumber == carNumber);
            return `${this.vehicles[carIndex].carModel} == ${this.vehicles[carIndex].carNumber} - ${this.vehicles[carIndex].payed == 'true' ? 'Has payed' : 'Not payed'}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
