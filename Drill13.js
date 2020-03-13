// Take your solutions from the recursive exercises that 
// you completed in the previous checkpoint and 
// identify the time complexities (big O) of each of them.

//O(1) Constant time- no loops
function countSheepRecursive(num) {
    // base case
    if (num === 0) {
        return console.log('All sheep jumped over the fence')
    }
    // recursive case
    console.log(`${num}: Another sheep jumps over the fence`)
    countSheepRecursive((num - 1))
}

console.log(countSheepRecursive(3))

//O(1) Constant time- no loops
function powerCalculatorRecursive(base, exponent) {
    // Chack if exponent is equal to zero
    if (exponent === 0 ) {
        return 1
    }
    // Base case
    if (exponent < 0) {
        return `exponent should be >= 0`
    }
    // Recursive case
    return base * powerCalculatorRecursive(base, (exponent - 1))
}

console.log(powerCalculatorRecursive(10, 2)) //100
console.log(powerCalculatorRecursive(10, -2)) //exponent should be >= 0

// Linear time O(n)
function reverseStringRecursive(string) {
    //base case
    if (string === '') {
        return ''
    }
    //recursive case
    const newChar = string[0]
    return reverseStringRecursive(string.slice(1)) + newChar
}

console.log(reverseStringRecursive('grace'))

//O(1) Constant time- no loops
function triangularNumberRecursive(number) {
    //base case
    if (number === 1) {
        return 1
    }
    // recursive case
    return number + triangularNumberRecursive(number - 1)
}

console.log(triangularNumberRecursive(4))

// Linear time O(n)
function stringSplitterRecursive(string, splitter) {
    // base case
    if (string.indexOf(splitter) === -1) {
       return [string.slice(0, string.length)]
   }
   // recursive case
   return [string.slice(0, string.indexOf(splitter)), ...stringSplitterRecursive(string.slice(string.indexOf(splitter) + 1), splitter)]
}

console.log(stringSplitterRecursive('02/20/2020', '/'))

// Linear time O(n)
function fibonacciRecursive(number) {
    // base  case
    if (number < 2) {
        return number
    }
    // recursive case
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2)
}

console.log(fibonacciRecursive(7))

// Linear time O(n)
function findfactorialRecursive(number) {
    // base case
    if (number === 2) {
        return 2
    }
    // recursive case
    return number * findfactorialRecursive(number - 1) // get closer until number === 2
}

console.log(findfactorialRecursive(5))

