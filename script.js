//Part 1

let x = 1;

while (x <= 100) {
    if (x % 3 === 0 && x % 5 !== 0) {
        console.log("Fizz");
    }
    if (x % 3 !== 0 && x % 5 === 0) {
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

//Part 2

let n = 1;
console.log(n);

