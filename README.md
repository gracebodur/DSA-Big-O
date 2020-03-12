# DSA Big-O Notation
**Algorithm** 
A recipe to do something

A procedure or set of rules used in calculation and problem-solving

A precisely defined set of mathematical or logical operations for the performance of a particular task.

Algorithms can be understood and studied in a language and machine-independent manner

**Big O notation** 
This table also shows the number of operations required by different time complexities with inputs of size 10, 100, and 1000:

| Big-O Notation  |n = 10   |n = 100   |n = 1000  |
|---|---|---|---|
| O(1)  |  1 |  1 | 1  |
| O(log n)  | 3  | 6  |9   |
| O(n)  | 10  | 100  | 1000  |
| O(n^2)  | 100  |  10000  | 1000000  |
| O(2^n)  | 1024  | 2^100  | 2^1000  |
	    	    	    
is a way of describing the time complexity of an algorithm. It is a system it's a way of generalizing code and talking about it and comparing code and its performance to other pieces of code.

a numeric representation of the performance of code.

**Time complexity** 
refers to the number of operations an algorithm requires to complete.

**Space complexity** 
refers to the amount of physical memory that an algorithm requires to complete. 

**Constant time O(1)**
```
function getFirstItem(array) {
    return array[0];
}
```
An algorithm with a O(1) or constant order of growth executes fixed number of operations

The running time for this sort of algorithm does not depend of the size of the input

Examples: arithmetic operations, finding an element in a particular position in an array etc.

**Logarithmic time O(log(n))**
```
function binarySearch(items, itemToMatch) {
    let low = 0, high = items.length - 1, middle, current;
           
    while (low <= high) {
        middle = Math.floor((low + high) / 2);
        current = items[middle];
        if (current > itemToMatch) {
            high = middle - 1;
        } else if (current < itemToMatch) {
            low = middle + 1;
        } else {
            return middle;
        }   
    }       
    return -1;
}
//Assume the array is sorted
let arr = [2,3,5,7,9,10,14,19];
binarySearch(arr, 10);
binarySearch(arr, 3);
```
Some fraction of the remaining input is processed in each iteration of a logarithmic algorithm

For example, if you have an array of 32 elements, an algorithm might process the first 16 (half of the remaining elements), then 8 (half of the remaining elements), then 4, then 2, then 1.

**Linear time O(n)**
```function findItem(items, itemToMatch) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === itemToMatch) {
            return true;
        }
     }
     return false;
}
```
An algorithm whose complexity is proportional to its input size n has a linear order of growth or O(n)

Big O depends on the number of inputs, as the inputs increase the numbers of operations increase linearly

**Polynomial time O(n^k)**

``` function quadraticSum(n) {
    let sum =[];
    for (let j = 0; j < n.length; j++) {
        for (let k = 0; k < n[j].length-1; k++) {
            sum.push(n[j][k] + n[j][k+1]);
        }
    }
    return sum;
}
let arr = [[1,2],[3,4],[5,6]];
console.log(quadraticSum(arr));
```

An algorithm whose running time is n to some power has a polynomial runtime. E.g. O(n^2), O(n^3)

For example consider two nested loops each running from 0 to n. The outer loop will run the inner loop n times.  And each time, the inner loop will run n times. The runtime for this algorithm is n to the power of two or O(n^2).

If you have three nested loops then the complexity will be O(n^3)

**Exponential time O(2^n)**

Algorithms with exponential time complexity (O(2^n)) have running times that grow rapidly with any increase in input size. For an input of size 2, an exponential time algorithm will take 2^2 = 4 time.


***runtime***
is simply how long something takes to run.

### Algorithm complexity

***Worst case complexity***
The max number of steps taken in any instance of size n

***Best case complexity***
The min number of steps taken in any instance of size n

***Average case complexity***
The average number of steps overall instances of size n

### Rule Book
Rule 1 : Worst case
Rule 2 : Remove Constants
Rule 3 : Different terms for inputs
Rule 4 : Drop Non Dominants

[Thinksheet Big O cheatsheet](https://tf-assets-prod.s3.amazonaws.com/tf-curric/data-science/Thinksheet-BigO.pdf)

[Andrei Neagoie Big O cheatsheat](https://a.udemycdn.com/2018-10-19_14-18-39-27f8c02f80e87abd3acf2fb6775ae65d/original.pdf?nva=20200313023415&token=052d30d58ad1e845b24cc)
