class Crop {
    constructor(acres){
        this.acres = acres
    }
}

class Wheat extends Crop {
    constructor(acres) {
        super(acres)
        this.price = 1.5
    }
    getYieldInKg() {
        return Math.pow(this.acres * 1.5, 1.3)
    }
}

class Sugarcane extends Crop{
    getYieldInKg() {
        return Math.pow(this.acres * 2.6, 1.1)
    }
}
module.exports = { Wheat, Crop, Sugarcane }
