interface Bird
{
    fly(): void;
}

interface Fish
{
    swim(): void;
}

function isFish(pet: Fish | Bird): // pet is Fish
{
    console.log ((pet as Fish).swim !== undefined);
    return ((pet as Fish).swim !== undefined);
}

function isBird(pet: Fish | Bird): // pet is Bird
{
    console.log ((pet as Bird).fly !== undefined);
    return ((pet as Bird).fly !== undefined);
}

class MyBird implements Bird
{
    fly(): void
    {
        console.log("Flying");
    }
}

let bird1:MyBird = new MyBird();
isFish(bird1);
isBird(bird1);


function getFood(pet: Fish | Bird)
{
    if (isFish(pet))
    {
        pet // is pet is Fish or Bird Not explicitly tell it will always confuse so that why we need to tell it explicitly
        console.log("Fish food");
    }
    else if (isBird(pet))
    {
        pet
        console.log("Bird food");
    }
}

export {}