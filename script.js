for (let i = 1; i < 1001; i++) {

    i % 3 === 0 && i % 5 === 0 ? console.log('Fizzbuzz') : i % 3 === 0 ? console.log('Fizz') : i % 5 === 0 ? console.log('Buzz') : console.log(i);
}