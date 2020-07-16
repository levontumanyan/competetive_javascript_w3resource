//  Write a JavaScript function to check whether an `input` is an array or not.

function is_array(arr) {
    return Array.isArray(arr);
}

console.log(is_array([12, 23, 21, 23]));

console.log(is_array(23));

console.log(is_array([12, 23, 21, "122"]));
console.log(is_array({ abc: 1223 }));
