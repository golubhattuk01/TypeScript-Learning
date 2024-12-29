type User =
{
    readonly id:number, // can't change the value
    name:string,
    age:number
    single : boolean,
    loc?:string // optional
}

type dob =
{
    day:number,
    month:number,
    year:number,
}

function getAdmin():User | number {

    // return {id:120 , name :"golu" , age:10 , single:true }
    return 10;
}

console.log(getAdmin())


let arr: number[] = [1,2,3,4,5,6,7,8,9,10]
let arr2: (number | string)[] = [1,2,3,4,5,6,7,8,9,10, "golu"]
let arr3: (number | string | boolean)[] = [1,2,3,4,5,6,7,8,9,10, "golu", true]

console.log(arr)
console.log(arr2)
console.log(arr3)

export {}