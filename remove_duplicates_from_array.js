// remove the duplicate entries from an array 

function remove_duplicates(array) {
    const array_setified = new Set(array);

    return [...array_setified];
}


console.log(remove_duplicates([12, 21, 2, 2, 3, 4, 5, 7, 6, 5, 5]));