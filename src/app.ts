import { CappuccinoFacade } from "./cappuccinoFacade";

const cappuccinoNoSugar:CappuccinoFacade = new CappuccinoFacade(false);
console.log("Capuchino sin azucar");
cappuccinoNoSugar.drink();

const cappucino:CappuccinoFacade = new CappuccinoFacade(true);
console.log("Capuchino con azucar");
cappucino.drink();