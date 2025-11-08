// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function range(start, end) {
    let listNum =[];// will be the array to list the numbers
    for (let i = start; i <= end;i++) {//will take the 'start' to 'end' number and stay within the range
        listNum.push(i)
    }
    return listNum;
}

console.log(range(1, 10));

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

function sum(numTotal) {
    let listTotal = 0;
    for (let i = 0; i < numTotal.length; i++) {//used the same function from question 1 to collect the list of numbers.
        listTotal += numTotal[i];// Added the sum function in order to add all nums from list
    }
    return listTotal;
}

console.log(sum(range(1, 10))); 

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

function reverseArray(alphaList) {//attempted to approach question 3.1 with same mentality as previous questions. 
    let alphaReverse = [];
    for (let i = alphaList.length -1; i >= 0; i--) {//first attempt 'let i = 0; i < alphalist.length; i++' but then realized I had to reverse. Referred to stack overflow.
        alphaReverse.push(alphaList[i]);//alphalist takes my input, alphaReverse.push completes the function
    }
    return alphaReverse;//creates the output.
}
console.log(reverseArray(["A", "B", "C"]));




/* Source - https://stackoverflow.com/a
Posted by CoolLife, modified by community. See post 'Timeline' for change history
 Retrieved 2025-11-08, License - CC BY-SA 3.0*/

function reverseArrayInPlace(array){ 
  for (var i = 0; i < Math.floor(array.length/2); ++i){ 
    var temp = array[i]; 
    array[i] = array[array.length - i - 1]; 
    array[array.length - i - 1] = temp; 
  } 
  /*Unable to complete question 3.2. Referred to stack overflow. After reading comments and codes, this one was easiest to understand. the 'for' line takes the variables and 
  repeats until all conditions are met. 'var temp = array[i]' is used to temporarily store the data. 'array[i] = array[array.length - i - 1];' and 'array[array.length - i - 1] = temp;'
  take the data and reverses the order.*/

  return array; //outputs numbers in reverse
}

var ar = [1, 2, 3, 4, 5];//must be in global scope because of how the function is called. 

console.log(reverseArrayInPlace(ar));