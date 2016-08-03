'use strict'

/*
 Problem 5 - Smallest multiple
 https://projecteuler.net/problem=5
*/

const upperBound = 20
const answer = findSmallestDivisable(upperBound)
console.log(answer)

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
