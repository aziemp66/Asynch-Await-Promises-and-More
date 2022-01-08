/* const job = {
    title: "Developer",
    location: "New York",
    salary: 75000,
};

console.log(new Date().toISOString());
 */

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }
    describe() {
        console.log(
            `I'm a ${this.title}, I work in ${this.location} and I earn $${this.salary}`
        );
    }
}

const developer = new Job("Developer", "Indonesia", 100000);
const cook = new Job("Cook", "Malaysia", 75000);

developer.describe();
cook.describe();

//Array Destructuring
const fullName = ["Azie", "Melza", "Pratama"];
const [firstName, middleName, lastName] = fullName;

//Object Destructuring
const { title: jTitle, location: jLocation, salary: jSalary } = developer;

console.log(jTitle);
console.log(jLocation);
console.log(jSalary);
