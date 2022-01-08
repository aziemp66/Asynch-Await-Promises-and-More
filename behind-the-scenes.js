const hobbies = ["Sports", "Cooking"]; //Reference : a pointer to the array is stored in a special memory
let number = 19; //Primitive : the value itself is stored

hobbies.push("Reading"); //The address of the array doesn't change

console.log(hobbies);

//Primitives Values : numbers, strings, booleans & more (undefined)
//Reference Values : Objects
const person = {
    age: 32,
};

function getAdultYears(p) {
    p.age -= 18;
    // return p.age -= 18;
    return p.age;
}

/* const money = 2000;

function payWithMoney(num) {
    num -= 500;
    return num;
} */

console.log(getAdultYears({ ...person }));
/* console.log(getAdultYears({ age: person.age })); */
console.log(person);

/* console.log(payWithMoney(money));
console.log(money);
 */
