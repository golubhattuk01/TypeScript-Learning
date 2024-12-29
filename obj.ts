const createCouse = ():{} => {
    return {}
}

const createCouse2 = ():{name :string , price :number} => {
    return {name :"golu" , price: 1000}
}


// return type is object but inside can't give default value this is odd behavior of objects

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

function getAdmin():User {

    return {id:120 , name :"golu" , age:10 , single:true }
}

function getAdmin2():User {
    return {id:130 , name :"golu" , age:10 , single:true , loc :"almora"}
}

type fullUser = User & dob

let me : fullUser = {id:120 , name :"golu" , age:10 , single:true , day:10 , month:10 , year:2000}
console.log(me)


export {}
