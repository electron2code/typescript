// class Chai {
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number) {
//         this.flavour = flavour;
//         this.price = price
//     }
// }

// const chai = new Chai("ginger", 20);
// chai.flavour = "masala";


class Chai {
    public flavour:string = "Masala";
    private secretIngredients = "Cardamom";

    reveal() {
        this.secretIngredients;
    }
}

const c = new Chai();
c.reveal();


class Shop {
    protected shopName = "Chai corner";
}

class ShopBranch extends Shop {
    getShopName() {
        return this.shopName // OK
    }
}


class Wallet {
    #balance = 1000;

    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet();
w.getBalance();



class Cup {
    readonly capacity: number = 250;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

const cup = new Cup(100);
console.log(cup.capacity);



class ModernChai {
    private _suger:number = 3;
    
    get suger(){
        return this._suger
    }

    set suger(value: number) {
        if (value > 5) throw new Error("Too much suger");
        this._suger = value;
    }
}

const modernChai = new ModernChai();
modernChai.suger = 2;


class BasedTea {
    static basedIngredients = "Tea leaves";
    static make() {
        console.log("making tea with base ingredients", this.basedIngredients);
    }
}

console.log(BasedTea.basedIngredients);
console.log(BasedTea.make());


abstract class Drink {
    abstract make():void
}

class BrewChai extends Drink {
    make() {
        console.log("Brewing Chai");
    }
}



// composition;

class Heater {
    heat() {
        console.log("Heating");
    }
}

class ChaiMaker {
    make() {
        this.heater.heat();
    }
    constructor(private heater:Heater) {}
}