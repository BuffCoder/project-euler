'use strict'

/*
 Problem 1 - Multiples of 3 and 5
 https://projecteuler.net/problem=1
*/

const limit = 1000
let sum = 0

for(let i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i
    }
}

console.log(`The sum of the multiples of 3 and 5 under ${limit} is: ${sum}`)