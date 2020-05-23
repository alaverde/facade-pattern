"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffee_1 = require("./coffee");
class CappuccinoFacade {
    constructor(sugar) {
        this.coffee = new coffee_1.Coffee();
        this.coffee.setCoffee("1 Taza");
        this.coffee.setMilk("1 Taza");
        this.coffee.setCinnamon("1 Cucharada en polvo");
        this.coffee.setCream("1/2 Taza");
        this.coffee.setSugar(sugar);
    }
    drink() {
        this.coffee.drink();
    }
}
exports.CappuccinoFacade = CappuccinoFacade;
