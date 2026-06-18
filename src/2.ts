//Primitives
let username: string = "Mohit"
let age: number = 27
let isadmin: boolean = true 


//Arrays
let numbers: number[] = [1,2,3,4]
let names: string[] = ["John","Doe"]


// Tuples
let person: [string,number] = ["piyush",27]


//enum
enum Color{
    blue,
    green,
    red,
}
let fovaouriteColor: Color = Color.red       //here the value of favouriteColor is red and it can blue or green also now other than these 


//Any (avoid when possillble)
let randomValue: any = 10
randomValue = "MKV";
randomValue = true;

// Unknown (safer than any)
let userInput: unknown = true;
userInput = 5;
userInput = "text";

//Void (Functions which do not return anything)

function total(num:number):void{
    console.log(num)
}

function total2(num:number):number{
    console.log(num)
    return num
}


// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

