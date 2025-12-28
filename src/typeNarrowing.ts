function getPizza(pizzaSize: string | number) {
    if (typeof pizzaSize === "string") {
        return `${pizzaSize} pizza`;
    }
    return `${pizzaSize}inches pizza`;
}

function showWelcomMsg(username?:string) {
    if (username) {
        return `Hello, ${username}. welcome to dashboard`;
    }
    return "Hello, welcome to dashboard";
}

function orderPizza(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "serve small pizza";
    } else if (size === "medium") {
        return "serve medium pizza";
    } else if (size === "large") {
        return "serve large pizza";
    } 
    return `Serve ${size}inches pizza`;
}

class MargheritaPizza {
    serve() {
        return "Serve Margherita pizza";
    }
}

class PepperoniPizza {
    serve() {
        return "Serve Pepperoni pizza"
    }
}

function serve(pizza: MargheritaPizza | PepperoniPizza) {
    if (pizza instanceof MargheritaPizza) {
        pizza.serve();
    } else if (pizza instanceof PepperoniPizza) {
        pizza.serve();
    }
}

type PizzaOrder = {
    name: string
    size: number
}

function isPizzaOrder(obj:any):obj is PizzaOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === "string" &&
        typeof obj.size === "number"
    )
}

function serveOrder(item:PizzaOrder | string) {
    if (isPizzaOrder(item)) {
        return `Serving ${item.name} pizza ${item.size}inches in size`;
    }
    return `Serving ${item} pizza`;
}

type MasalaChai = {name: "masala"; spicelevel: string}
type GingerChai = {name: "ginger"; amount: string}
type ElaichiChai = {name: "elaichi"; aroma: string}

type Chai = MasalaChai | GingerChai | ElaichiChai

function makeChai(order: Chai) {
    switch (order.name) {
        case "masala":
            console.log("making masala chai")
            break;
        case "ginger":
            console.log("making ginger chai")
            break;
        case "elaichi":
            console.log("making ginger chai")
            break;
    }
}


function brew(chai:Chai) {
    if ("spicelevel" in chai) {
        console.log(`Spicelevel is ${chai.spicelevel}`);
    } else if ("amount" in chai) {
        console.log("This is ginger chai");
    } else {
        console.log(`this is ${chai.name} and aroma is ${chai.aroma}`)
    }
}