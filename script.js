let x = 1;

while (x <= 100) {
    // console.log(x);
    if (x % 3 === 0) {
        console.log("Fizz");
    }
    if (x % 5 === 0) {
        console.log("Buzz");
    }
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("Fizz Buzz")
    }
    if (x % 3 !== 0 && x % 5 !== 0) {
        console.log(x);
    }

    x++;
}