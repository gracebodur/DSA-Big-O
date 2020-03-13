// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

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


function countSheepIterative(num) {
    if (num === 0) {
        return console.log('All sheep jumped over the fence')
    }
    for(let i=0; i < num; i++) {
        console.log(`${num}: Another sheep jumps over the fence`)
    }
}

console.log(countSheepIterative(3))


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

function powerCalculatorIterative(base, exponent) {
    let result = base;
    if (exponent < 0) {
        return `exponent should be >= 0`
    }
    for (let i = 1; i < exponent; i++) {
        result *= base
    }
    return result
}

console.log(powerCalculatorIterative(10, 2))
console.log(powerCalculatorIterative(10, -2))

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

function reverseStringIterative(string) {
    let reverse = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string.charAt(i)
    }
    return reverse
}

console.log(reverseStringIterative('grace'))

function triangularNumberRecursive(number) {
    //base case
    if (number === 1) {
        return 1
    }
    // recursive case
    return number + triangularNumberRecursive(number - 1)
}

console.log(triangularNumberRecursive(4))

function triangularNumberIterative(number) {
    let result = 0
    for (let i = number; i >= 0; i--) {
        result +=1
    }
    return result
}

console.log(triangularNumberIterative(4))

function stringSplitterRecursive(string, splitter) {
    // base case
    if (string.indexOf(splitter) === -1) {
       return [string.slice(0, string.length)]
   }
   // recursive case
   return [string.slice(0, string.indexOf(splitter)), ...stringSplitterRecursive(string.slice(string.indexOf(splitter) + 1), splitter)]
}

console.log(stringSplitterRecursive('02/20/2020', '/'))

function stringSplitterIterative(string) {
    let result = []
    let newString = ''

    for (let i = 0; i <= string.length; i++) {
        if(string[i] !== '/' && string[i] !== undefined) {
            newString += string[i]
        } else {
            result.push(newString)
            newString = ''
        }
    }
    return result
}

console.log(stringSplitterIterative('02/20/2020'))

function fibonacciRecursive(number) {
    // base  case
    if (number < 2) {
        return number
    }
    // recursive case
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2)
}

console.log(fibonacciRecursive(7))

function fibonacciIterative(number) {
    let result = []

    if(number <=0) {
        return 0
    }

    for(let i = 1; 1 <= number; i++) {
        let fibNum = null
        if(i == 1) {
            fibNum = 1
        }
        if(i > 2 ) {
            fibNum = result[i-2] + result[i-3]
        }
        result.push(fibNum)
    }
   return result
}

console.log(fibonacciIterative(7))

function findfactorialRecursive(number) {
    // base case
    if (number === 2) {
        return 2
    }
    // recursive case
    return number * findfactorialRecursive(number - 1) // get closer until number === 2
}

console.log(findfactorialRecursive(5))

function findfactorialIterative(number) {
    let result = 1;

    for (let i = n; i > 0; i--) {
        if(i === 1) {
            result = result
        }
        result = result * i
    }
  return result
}

console.log(findfactorialIterative(5))