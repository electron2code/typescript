interface Chai {
    name: string
    price: number
    milk?:boolean
}

const masalaChai: Chai = {
    name: "masala chai",
    price: 10,
    milk: true
}

interface Shop {
    readonly id: number
    name: string
}

const s:Shop = {
    id: 20,
    name: "Chai corner"
}



interface CalculateDiscount {
    (price: number): number
}

const apply50: CalculateDiscount = (price) => price * 0.5;


interface ChaiMachine {
    start():void
    stop():void
}

const machine:ChaiMachine = {
    start() {
        console.log("machine started");
    },
    stop() {
        console.log("machine stoped");
    },
}



interface ChaiRatings {
    [flavor: string]: number
}

const ratings: ChaiRatings = {
    masala: 5.0,
    ginger: 4.9,
}


interface User {
    name: string
}

interface User {
    id: number
}

const u:User = {
    name: "israfil",
    id: 1
}


interface A {a: string}
interface B {b: string}

interface C extends A, B {c: string};

const obj:C = {
    a: "a",
    b: "b",
    c: "c"
}

