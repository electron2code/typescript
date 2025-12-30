function wrapInArray<T>(item: T):[T] {
    return [item];
}

wrapInArray("masala");
wrapInArray(20);
wrapInArray({name: "masala"});


function pair<A, B>(a: A, b: B):[A, B] {
    return [a, b];
}

pair(20, 20)
pair("masala", 20)
pair({name: "masala", quantity: 2}, 20)


interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const chaiBoxCup: Box<string> = {content: "10"}


interface ApiPromise<T> {
    status: number
    data: T
}

const res: ApiPromise<{name: string, price: number}[]> = {
    status: 200,
    data: [
        {name: "masala", price: 20},
        {name: "ginger", price: 10},
    ]
}
