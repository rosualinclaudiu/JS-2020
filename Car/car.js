let dacia = {
    make: "Dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    averageConsumption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150,
    paint /* : function  - nu este obligatoriu in interiorul unui element*/ (color) {
        this.color = color

    },
    move: function (distance) {
        consumption = this.averageConsumption * distance / 100
        if (consumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else {
            this.batteryCharge -= consumption
            this.mileage += distance
        }
    },
    recharge: function () {
        this.batteryCharge = this.batteryCapacity
        this.mileage += distance
    },
    distanceToEmpty: function () {
        return 100 * this.batteryCharge / this.averageConsumption
    }
}

let ferrari = {
    make: "Ferrari",
    model: "GTS",
    color: "rosu",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    paint: function (color) {
        this.color = color

    }
}
dacia.paint("galben")
dacia.move(100)
console.log(Math.round(dacia.distanceToEmpty()))
dacia.move(100)
console.log(dacia.distanceToEmpty())
console.log(dacia)
console.log(ferrari)
// in pagina web, la Inspect, Console, vedem toate detaliile de mai sus
