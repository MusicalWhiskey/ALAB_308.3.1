//Part 1

// let x = 1;

// while (x <= 100) {
//     if (x % 3 === 0 && x % 5 !== 0) {
//         console.log("Fizz");
//     }
//     if (x % 3 !== 0 && x % 5 === 0) {
//         console.log("Buzz");
//     }
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log("Fizz Buzz")
//     }
//     if (x % 3 !== 0 && x % 5 !== 0) {
//         console.log(x);
//     }

//     x++;
// }

//Part 2

for (let n = 1; n <= 1000; n++) {
  

  
    let isPrime = true;
  
    for (let j = 2; j < n; j++) {
      if (n % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime === true) {
      console.log(`${n} is the next prime number`);
    }
  }
