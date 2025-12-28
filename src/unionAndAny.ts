let followers: string | number = 100;

followers = "1M";

let apiRequestStatus: "panding" | 199 | "success" | 200 | "error" | 500 = "panding";

apiRequestStatus = 200;

let userRole: "admin" | "moderator" | "member";

userRole = "admin";


let username: string | undefined;

const users = ["alyssa", "dianna", "karolina"];

for (const user of users) {
    if (user === "dianna") {
        username = user;
    }
}

console.log(username);