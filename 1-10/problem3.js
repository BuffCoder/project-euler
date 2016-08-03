'use strict'

/*
 Problem 3 - Largest prime factor
 https://projecteuler.net/problem=3
*/

console.time('Problem 3')
main()
console.timeEnd('Problem 3')

function main() {
  const myNumber = 600851475143
  const factors = findFactors(myNumber)

  console.log(`The largest prime factor is: ${factors[factors.length - 1]}`)
}

function findFactors(num) {
  let factors = []
  let i, j

  if (num % 2 === 0) {
    i = 2
    j = 1
  } else {
    i = 3
    j = 2
  }

  for (i; i <= num; i += j) {
    while ((num % i) === 0) {
      if (isPrime(i)) {
        factors.push(i)
      }
      num /= i
    }
  }

  return factors
}

function isPrime(num) {
  if (num === 1) {
    return false
  }

  const max = Math.floor(Math.sqrt(num))
  for (let i = 2; i < max; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}
