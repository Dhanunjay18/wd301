interface User {
    name: string;
    id: number;
    isAdmin: boolean;
}

let newUser: User = {
    name: "Jane",
    id: 1,
    isAdmin: false
};

// function printHello(): void {
//     console.log("Hello World");
// }
// printHello();

// function throwError(): never {
//     throw new Error("An error occurred!");
// }
// // throwError();
console.log(newUser["name"]);
function addUser(user: User): string {
    return user.name + " added successfully";
}