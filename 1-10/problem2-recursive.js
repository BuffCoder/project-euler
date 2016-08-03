'use strict'

/*
 Problem 2 - Even Fibonacci numbers
 https://projecteuler.net/problem=2
*/

const upperBound = 4000000
const sequence = calculateFibonacci([1, 1], upperBound)
const sum = sumSequence(sequence, 2)

console.log(`The sum of even Fibonacci numbers under ${upperBound} is: ${sum}`)

function calculateFibonacci(sequence, upperBound) {

    const nextNumber = fibonacci(sequence[sequence.length - 2], sequence[sequence.length - 1])

    if (nextNumber <= upperBound) {
        sequence.push(nextNumber)
        calculateFibonacci(sequence, upperBound)
    }

    return sequence

}

function fibonacci(prev2, prev1) {
    return prev2 + prev1
}

function sumSequence(sequence, divisor) {
    let sum = 0

    sequence.map(value => {
        if (value % 2 === 0) {
            sum += value
        }
    })

    return sum
}