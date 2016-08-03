'use strict'

/*
 Problem 4 - Largest palindrome product
 https://projecteuler.net/problem=4
*/

console.time('Problem 4')
main()
console.timeEnd('Problem 4')

function main() {
  const upperBound = 999
  const palindrome = findPalindrome(upperBound)

  console.log(palindrome)
}

function isPalindrome(num) {
  const numString = num.toString()
  const length = numString.length

  for (let i = 0; i < length / 2; i++) {
    if (numString[i] != numString[length - i - 1]) {
      return false
    }
  }

  return true
}

function findPalindrome(upperBound) {
  let highestPalindrome = 0

  for (let i = upperBound; i > 0 && (i * upperBound) > highestPalindrome; i--) {

    for (let k = upperBound; k > 0 && (i * k) > highestPalindrome; k--) {

      const result = i * k
      if (isPalindrome(result) && result > highestPalindrome) {
        highestPalindrome = result
      }

    }

  }

  return highestPalindrome
}
