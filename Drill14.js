// Take your solutions from the iterative exercises 
// today and identify the time complexities (big O) of each of them.

//Linear 0(n)
function countSheepIterative(num) {
    if (num === 0) {
        return console.log('All sheep jumped over the fence')
    }
    for(let i=0; i < num; i++) {
        console.log(`${num}: Another sheep jumps over the fence`)
    }
}

console.log(countSheepIterative(3))

//Linear 0(n)
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

//Linear 0(n)
function reverseStringIterative(string) {
    let reverse = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string.charAt(i)
    }
    return reverse
}

console.log(reverseStringIterative('grace'))

//Linear 0(n)
function triangularNumberIterative(number) {
    let result = 0
    for (let i = number; i >= 0; i--) {
        result +=1
    }
    return result
}

console.log(triangularNumberIterative(4))

//Linear 0(n)
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

//Linear 0(n)
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

//Linear 0(n)
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