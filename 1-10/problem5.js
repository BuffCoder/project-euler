'use strict'

/*
 Problem 5 - Smallest multiple
 https://projecteuler.net/problem=5
*/

console.time('Problem 5')
main()
console.timeEnd('Problem 5')

function main() {
  const upperBound = 25
  const answer = findSmallestDivisable(upperBound)
  console.log(`The smallest number that can be divided by all numbers below ${upperBound} is: ${answer}`)
}

function findSmallestDivisable(upperBound) {
  let result = 0

  let multiplier = 1
  while (!result) {

    const solution = isDivisable(upperBound, multiplier)
    if (solution) {
      result = solution
    }

    multiplier++
  }

  return result
}

function isDivisable(upperBound, multiplier) {
  const possibleResult = upperBound * multiplier

  for (let i = upperBound - 1; i > 0; i--) {
    if (possibleResult % i != 0) {
      return false
    }
  }

  return possibleResult
}
