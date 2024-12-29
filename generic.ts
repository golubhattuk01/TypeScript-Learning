interface Nameble
{
    name: string;
}

class Quiz implements Nameble
{
    constructor(
    public name: string,
    private author : string,
    private subject : string,
    ){}
}

class Course implements Nameble
{
    constructor(
    public name: string,
    private author : string,
    private subject : string,
    ){}
}

class Sellable<T extends Nameble> 
{
    private items:T[] = []
    public addItem(item :T)
    {
        this.items.push(item);
    }
    
    public getItems(): void{
        console.log("Items in the list are: ");
        this.items.map((item) => {
            console.log(item.name);
    })}
}

let quiz = new Quiz("Quiz1", "Author1", "Subject1");
let course = new Course("Course1", "Author1", "Subject1");

let sellable = new Sellable<Quiz>();
sellable.addItem(quiz);
// sellable.addItem(course);
sellable.getItems()

export {}