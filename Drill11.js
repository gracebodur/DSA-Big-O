// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. 
// Your program should display each movement of the disk from one rod to another.

// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?


let count = 0;
function hanoiPuzzle(disks, origin, destination, temp) {
  if(disks === 1) {
    console.log(`${disks} moving ${origin} -> ${destination} count: ${++count}`)
  } else {
    hanoiPuzzle(disks-1, origin, temp, destination);
      console.log(`${disks} moving ${origin} -> ${destination} count: ${++count}`);
    hanoiPuzzle(disks-1, temp, destination, origin)
  }
}
console.log(hanoiPuzzle(3, 'A', 'B', 'C'));

//#11 - 1
// After 7 recursive calls, 2 largest disks will be on A and 3 smallest disks will be on B.

//#11 -2
// 3 disks = 7 moves
// 4 disks = 15 moves
// 5 disks = 31 moves

// #11 - 3 
// Big O: Exponential time 0(2^n - 1)