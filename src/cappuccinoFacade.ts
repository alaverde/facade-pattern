import { Coffee } from "./coffee";

export class CappuccinoFacade{
    private coffee:Coffee;

    constructor(sugar:boolean){
        this.coffee = new Coffee();
        this.coffee.setCoffee("1 Taza");
        this.coffee.setMilk("1 Taza");
        this.coffee.setCinnamon("1 Cucharada en polvo");
        this.coffee.setCream("1/2 Taza");
        this.coffee.setSugar(sugar);
    }

    public drink():void{
        this.coffee.drink();
    }
}