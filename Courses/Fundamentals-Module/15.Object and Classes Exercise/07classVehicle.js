function classVehicle() {
    function swag(a, b) {
        
        return b - a;
    }
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            
        }
    }
    let parts = { engine: 6, power: 100, quality: 600};
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.swag(parts)
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}
classVehicle();