//  There are two arrays with individual values, 
// write a JavaScript program to compute the sum of each individual index value from the given arrays.

function sum_of_two_arrays(array1, array2) {
    const max_length = Math.max(array1.length, array2.length);
    const min_length = Math.min(array1.length, array2.length);


    let array_summed = new Array(min_length).fill(0);

    for (let i = 0; i < min_length; i++) {
        array_summed[i] = array1[i] + array2[i];
    }

    if (array1.length === max_length) {
        return array_summed.concat(array1.slice(min_length, max_length));
    }
    else {
        return array_summed.concat(array2.slice(min_length, max_length));

    }

}


console.log(sum_of_two_arrays([23, 123, 623, 21, 13, 65765], [12, 2, 23, 4]));