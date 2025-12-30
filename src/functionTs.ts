function makeChai(name: string, quantity: number) {
    console.log(`Making ${quantity} of ${name} chai`);
}

makeChai("masalaChai", 2);

function getPrice(name: string, quantity:number):number | null {
    if (name === "masalaChai") {
        return 10 * quantity;
    } else {
        return null;
    }
}


function showAvailableChai():void {
    console.log("Masala Chai");
}

function orderChai(type?: string) {
    console.log(`Ordering ${type || "a"} chai`);
}

function serveChai(type:string = "masalaChai") {
    console.log(`Serving ${type} chai`);
}


function Navbar(navbarStyle: {headerStyle: string, navlinkStyle: string}) {
    const {headerStyle, navlinkStyle} = navbarStyle;
    console.log(headerStyle, navlinkStyle);
}