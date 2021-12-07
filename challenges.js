// 100. Addition Checkpoint


// Create a function that takes two numbers
// Your function should return the sum of the two numbers passed in
// Check your function.

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(3, 5)) // should log 8

// 110. Conditional checkpoint
// Create a function that takes two numbers
// if the first number is bigger than the second number, return "The first number was bigger!"
// if the second number is bigger than the first number, return "the second num was bigger!"
// if the numbers are the same, return "The numbers are the same!"

function comparingTwoNumbers(num1, num2){
    if(num1 > num2){
        return "The first number was bigger!";
    } else if(num2 > num1){
        return "The second number was bigger!";
    } else {
        return "The numbers are the same!";
    } 
} // end function comparingTwoNumbers


console.log(comparingTwoNumbers(3,5)); // should log "the second number was bigger!"
console.log(comparingTwoNumbers(7, 3)); // shoould log "The first number was bigger!"
console.log(comparingTwoNumbers(5, 5)); // should log "The numbers are the same"


// 120: Create a function that takes in an array. Add up the first and last values in the array

function addFirstAndLastNumber(array){
    return array[0] + array[array.length - 1];
} // end fundtion addFirstAndLastNumber

console.log(addFirstAndLastNumber([1,2,3,4,5,9])); // should log 7

// 130: Create a function that takes two parameters
// the first parameter is an array
// the second parameter will be a number
// function should return a string that combines all of the values starting at the index of the 
// number passed in through the end of the array

function stringConcatenation(array, num){
    sum = ''
    for(num; num < array.length; num++){
        sum += array[num]
    } // end for loop
    return sum
} // end function stringConcatenation

console.log(stringConcatenation(['a','b','c'], 1)); // should log "bc"
console.log(stringConcatenation(["kakd", "ate", "eod", "Hello", " ", "everyone", "!"], 3)); // Should log "Hello everyone!"


//  