function carFactory(order) {
    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];

        return engines.find(el => el.power >= power);
    }
    function getCarriage(carriage,color) {
        const typeOfCarriage = {
            type: carriage,
            color: color
        };
        return typeOfCarriage;
    }
    function getWheels(wheelsize) {
        const arrOfWheels = [];
        let wheel = Math.floor(wheelsize) % 2 === 0
        ? Math.floor(wheelsize) - 1
        : Math.floor(wheelsize);
        return [wheel,wheel,wheel,wheel];
    }
    return {
        model: order.model,
        engine: getEngine(order.power),
        carriage: getCarriage(order.carriage,order.color),
        wheels: getWheels(order.wheelsize)
    }
}
console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }));