"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cappuccinoFacade_1 = require("./cappuccinoFacade");
const cappuccinoNoSugar = new cappuccinoFacade_1.CappuccinoFacade(false);
console.log("Capuchino sin azucar");
cappuccinoNoSugar.drink();
const cappucino = new cappuccinoFacade_1.CappuccinoFacade(true);
console.log("Capuchino con azucar");
cappucino.drink();
