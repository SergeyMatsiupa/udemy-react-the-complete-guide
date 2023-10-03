// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

let age: number = 24;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

//More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
    name: string;
    age: number;
};
person = {
    name: "Max",
    age: 32,
};
// person = {
//     isEmployee: true,
// };

let people: {
    name: string;
    age: number;
}[];

// Type inference
// let course = "React - The Complete Guide";
// course = 1234;

let course: string | number = "React - The Complete Guide";
course = 1234;


type Person = {
    name: string;
    age: number;
}
let person1: Person = {
    name: "Name1",
    age: 33,
}
let persons: Person[];


//Functions & types
function add(a: number, b: number): number {
    return a + b;
}

function myPrint(value: any) {
    console.log(value);
}


// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray[0].split("");
const stringArray = insertAtBeginning(["a", "b", "c"], "d");