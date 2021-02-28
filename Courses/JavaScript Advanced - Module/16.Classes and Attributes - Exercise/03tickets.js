function tickets(inputArray, sortingCriteria) {
    function splitLine(line) { return line.split('|') }

    function convertTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status);
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sortFast = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status),
    }
    return inputArray
        .map(splitLine)
        .map(convertTicket)
        .sort(sortFast[sortingCriteria]);
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))