interface User {
    id: number,
    name: string,
    call: () => number
    text(): string
}


type User1=
{
    id: number,
    name: string,
    call: () => number,
    text?(): string,
}

let user: User = {
    id: 1,
    name: "Jhon",
    call: (): number => {
        return 10;
    },
    text: (): string => {
        return "Hello";
    }
}


let user1: User1 = {
    id: 1,
    name: "Jhon",
    call: (): number => {
        return 10;
    },
    // text : (): string => {
    //     return "Hello";
    // }
}


console.log(user.call());
console.log(user1.call());

export { }