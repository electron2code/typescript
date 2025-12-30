const Tea = {
    name: "MasalaTea",
    price: 20,
    isHot: true
}

let chai: {
    name: string
    price: number
    isHot: boolean
}

chai = {
    name: "Ginger",
    price: 20,
    isHot: true
}

type MasalaTea = {
    name: string
    price: number
    isHot: boolean
    ingredients: string[]
}

const masalaTea: MasalaTea = {
    name: "masalaTea",
    price: 10,
    isHot: true,
    ingredients: ["masala", "milk"]
}


type Cap = {size: string}

let smallCap: Cap = {size: "200ml"}
let bigCap = {size: "300ml", material: "steel"}

smallCap = bigCap;


type Brew = {brewTime: number}

let coffee = {brewTime: 100, beans: "Arabic"}
const chaiBrew:Brew = coffee


type Item = {name: string, quantity: number}
type Address = {address1: string, address2?: string}

type Order = {
    id: string
    items: Item[]
    address: Address
}

type Chai = {
    name: string
    price: number
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updates is", updates);
}

updateChai({isHot: true});




type ChaiOrder = {
    name?: string
    quantity?: number
}

const placeOrder = (chai: Required<ChaiOrder>) => {
    console.log(chai);
}

placeOrder({
    name: "masalaChai",
    quantity: 2,
});


type Tea = {
    name: string
    price: number
    isHot: boolean
    ingredients: string[]
}

type BaseTea = Pick<Tea, "name" | "price">

const tea:BaseTea = {
    name: "masala tea",
    price: 24,
}



type NewChai = {
    name: string
    price: number
    isHot: boolean
    secretIngredients: string[]
}

type PublicChai = Omit<NewChai, "secretIngredients">

const newChai: PublicChai = {
    name: "masala chai",
    price: 20,
    isHot: true,
}