"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coffee {
    constructor() {
        this.coffee = "";
        this.milk = "";
        this.cinnamon = "";
        this.cream = "";
        this.sugar = true;
    }
    setMilk(milk) {
        this.milk = milk;
    }
    setCinnamon(cinnamon) {
        this.cinnamon = cinnamon;
    }
    setCream(cream) {
        this.cream = cream;
    }
    setCoffee(coffee) {
        this.coffee = coffee;
    }
    setSugar(sugar) {
        this.sugar = sugar;
    }
    drink() {
        console.log(this);
    }
}
exports.Coffee = Coffee;
