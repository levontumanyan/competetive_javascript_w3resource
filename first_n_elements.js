function first_n_elements(n, array) {

    if (Array.isArray(array)) {
        if (n <= array.length) {
            return array.slice(0, n);

        }
        else {
            throw 'n must be less than or equal to the length of the array';
        }
    }
    else {
        throw 'The second parameter is not an array!';
    }

}




try {
    console.log(first_n_elements(12, 'asdas'));

} catch (e) {
    console.error(e);
}

try {
    console.log(first_n_elements(2, [1, 23, 434, 123, 2]));

} catch (e) {
    console.error(e);
}

try {
    console.log(first_n_elements(12, [1, 23, 434, 123, 2]));
} catch (e) {
    console.error(e);
}

try {
    console.log(first_n_elements(3, [[1], 23, 434, 123, 2]));
} catch (e) {
    console.error(e);
}