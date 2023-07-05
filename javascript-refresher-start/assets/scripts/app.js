// import { apiKey } from "./util";
import apiKey from "./util"
// alert(apiKey);
import { var1, var2 as vvv} from "./util"
import * as util from "./util.js";
    console.log('util', util);
    console.log('vvv', vvv);

const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log('hello');
        console.log('this.age', this.age);
    }
}
console.log('user.name', user.name);
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi!");
    }
}
const user1 = new User("Manuel", 35);
console.log('user1', user1);


const hobbies = ["Sports", "Cooking", "Reading"];
hobbies.push("working");
// const index = hobbies.findIndex((item) => {
    // return item === "working";
// });
const index = hobbies.findIndex((item) => item === "working");
console.log('index', index);

const editedHobbies = hobbies.map(item => item + "!");
console.log('editedHobbies', editedHobbies);
const editedHobbies1 = hobbies.map(item => ({text : item + "!"}));
console.log('editedHobbies1', editedHobbies1);

// const userNameData = ["Max", "Schwarzmuller"];
const [firstName, lastName] = ["Max", "Schwarzmuller"];
// const user2 = {
//     name: "Max",
//     age: 34
// };
const {name: userName, age} = {
    name: "Max",
    age: 34
};
console.log('userName', userName);
console.log('age', age);


const newHobbies = ["Reading-1"];
const mergedHoddies = [...hobbies, ...newHobbies];
console.log('mergedHoddies', mergedHoddies);

const extendedUser = {
    isAdmin: true,
    ...user
};
console.log('extendedUser', extendedUser);

for (const hobby of mergedHoddies) {
    console.log('hobby', hobby);
}


// const list = document.querySelector("ul");
// list.remove();

const handleTimeout1 = () => {
    console.log("Time is out!")
}
setTimeout(handleTimeout1, 2000);

setTimeout(() => {
    console.log("huge timeout is out too");
}, 4000);


function init() {
    function greet() {
        console.log("Hi!!!");
    }

    greet();
}
init();


class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();