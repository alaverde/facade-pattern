export class Coffee {
    private coffee:string = "";
    private milk:string = "";
    private cinnamon:string = "";
    private cream:string = "";
    private sugar:boolean = true;

    public setMilk(milk:string){
        this.milk = milk;
    }

    public setCinnamon(cinnamon:string){
        this.cinnamon = cinnamon;
    }

    public setCream(cream:string){
        this.cream = cream;
    }

    public setCoffee(coffee:string){
        this.coffee = coffee;
    }

    public setSugar(sugar:boolean){
        this.sugar = sugar;
    }

    public drink():void{
        console.log(this);
    }
}