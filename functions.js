function greetUser(greetingPrefix = "Hello There!", userName = "user") {
    console.log(greetingPrefix + " " + userName + "!");
}

function sumUp(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}

console.log(sumUp(1, 2));
