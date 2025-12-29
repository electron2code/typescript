const response: any = "23";

const responseLength: number = (response as string).length;

console.log(responseLength.toLocaleString("en-IN"));

type Book = {
    name: string
}
const bookResponse = '{"name": "Principles of Electronics"}'
const book = JSON.parse(bookResponse) as Book;

console.log(book.name);


const usernameInpEl = document.getElementById("username") as HTMLInputElement;

let value: any;

value = 10;
value = "10";
value = [10, 20]


let newValue: unknown;

newValue = 10;
newValue = "20";
newValue = [10, 20];

if (typeof newValue === "string") {
    newValue.length;
}


try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    } else {
        console.log("error", error);
    }
}

const data:unknown = "electron2code";
const strData:string = data as string;
strData.length;


type Role = "admin" | "user"

function redirectBaseOnRole(role: Role):void {
    if (role === "admin") {
        console.log("redirecting to admin page")
        return
    } else if (role === "user") {
        console.log("redirecting to post page")
        return
    }
    role
}

function runServer():never {
    while(true) {}
}
