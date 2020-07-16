// Write a JavaScript program to find a pair of elements 
// (indices of the two numbers) from an given array whose sum equals a specific target number.

// My solution is O(n) 

// Obvious solution would be to to iterate twice through the array but that is not optimal

function sum_equal_to_target(array, target) {

    let current_pair_sum = 0;

    const length = array.length;

    for (let i = 1; i < length; i++) {
        current_pair_sum = array[i] + array[i - 1];

        if (current_pair_sum === target) {
            return [i - 1, i];
        }
        else {
            current_pair_sum = 0;
        }
    }

}

console.log(sum_equal_to_target([10, 20, 10, 40, 50, 60, 70], 50));