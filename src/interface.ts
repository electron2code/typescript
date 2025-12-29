type Pizza = {
    name: string; 
    spicelevel: number;
    strong: boolean;
}

function makePizza(pizza: Pizza) {
    console.log(pizza);
}

function orderPizza(pizza: Pizza) {
    console.log(pizza);
}


// type TeaRecipe = {
//     water: number
//     milk: number
// }

interface TeaRecipe {
    water: number;
    milk: number;
}

class MasalaTea implements TeaRecipe {
    water = 100;
    milk = 200;
}

// type CupSize = "small" | "medium" | "large";

interface CupSize {
    size: "small" | "medium" | "large"
}

class Tea implements CupSize {
    size: "small" | "medium" | "large" = "small";
}



type TeaType = "MasalaTea" | "LemonTea" | "OrangeTea"

function orderTea(t: TeaType) {
    console.log(t);
}


type BaseTea = {
    teaLeaves: number
    suger: number
}

type Extra = {
    orange: number,
}

type OrangeTea = BaseTea & Extra;

const cup: OrangeTea = {
    teaLeaves: 100,
    suger: 50,
    orange: 2,
}

