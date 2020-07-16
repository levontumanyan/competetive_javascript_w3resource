// Write a JavaScript program to find the most frequent item of an array.

function most_frequent_item(array) {
    let frequency_table = {};

    for (const element of array) {
        if (element in frequency_table) {
            frequency_table[element] += 1;
        }
        else {
            frequency_table[element] = 1;
        }
    }

    console.log(frequency_table);

    // let most_frequent_item = array[0];

    // for (const element of )
    // iterate through frequency table

    let entries = Object.entries(frequency_table);
    let max_frequency_element;
    let max_frequency = 0;

    for (const [element, frequency] of entries) {
        console.log(`There are ${frequency} ${element}s`);
        if (frequency > max_frequency) {
            max_frequency = frequency;
            max_frequency_element = element;
        }
    }

    console.log(max_frequency, max_frequency_element);

    return max_frequency_element;

}

console.log(most_frequent_item([12, 12, 23, 23]));