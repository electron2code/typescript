const chaiFlavours: string[] = ["masala", "adrak", "lemon"];
const chaiPrice: number[] = [10, 30, 20];
const rating: Array<number> = [5.0, 4.7, 4.9];

type Chai = {
    name: string
    price: number
}

const menu: Chai[] = [
    {name: "masala", price: 20},
    {name: "adrak", price: 10},
]

const cities: readonly string[] = ["dhaka", "manikganj"]

const table: number[][] = [
    [10, 20],
    [30, 40]
];


let chaiTuple: [string, number];

chaiTuple = ["masala", 30]
chaiTuple = ["lemon", 20]


let userInfo: [string, number, boolean?];
userInfo = ["israfil", 100, true]
userInfo = ["electron2code", 100]

const location: readonly [number, number] = [23.34, 32.33];

// named tuple
const teaTuple: [name: string, price: number] = ["masalaTea", 20];


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const cupSize = CupSize.LARGE

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
    ADRAK = "adrak"
}

function makeChai(type:ChaiType) {
    console.log(`Making ${type} chai`);
}

makeChai(ChaiType.MASALA);

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCLED // 102
}

const enum Suger {
    LOW = 1,
    NORMAL = 2,
    HIGH = 3
}

let t: [string, number] = ["masala", 10];

// t.push("hello") Weird 