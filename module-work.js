// test connection between .js and .html file, and that it
// prints to the console on the webpage open
console.log("hello world");

// create a variable and print it to console
let y = 2;
console.log(y);

// basic JS function
function printHello() {
    console.log("Over the Line!");
}
// calling the above function we just created
printHello();

// simple JS functions
function addition(a, b) {
    return a + b;
}
console.log(addition(44, 73));

// functions can also call other functions, i.e. they're nested functions
function doubleAddition(c, d) {
    let total = addition(c, d) *2;
    return total;
}

console.log(doubleAddition(73, 54));

printHello = () => console.log("this is not Nam, this is bowling, there are rules");
printHello();
addition = (a, b) => a + b;



tripleAddition = (e, f) => console.log((e, f) * 3);
tripleAddition(5, 6);

let friends = ["The Dude", "Walter", "Donny", "Maude"];

function listLoop(userList) {
    for (let i = 0; i < userList.length; i++) { // this line basically starts us at the first item, tells the function not to go more times than there are items in the list, and to add one to the count for every iteration
        console.log(userList[i]); // this tells the function to print every item [i] in the userList
    }
}

listLoop(friends);

let vegetables = ["Spinach", "Carrots", "Tomatoes", "Peas"];

for (let i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i] + "!");
}

for (let i = 0; i < 5; i++) {
    console.log("I am " + i);
}

