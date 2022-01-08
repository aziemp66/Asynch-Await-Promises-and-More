function greetUser(greetingPrefix = "Hello There!", userName = "user") {
    /* console.log(greetingPrefix + " " + userName + "!"); */
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser("Hi", "Azie");

function sumUp(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sumUp(3, 4, 5, 6, 2, 4, 4, 1));

const inputNumbers = [1, 3, 5, 7, 8, 9];

console.log(sumUp(...inputNumbers));

console.log(sumUp);
