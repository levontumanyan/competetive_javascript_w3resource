// Write a JavaScript program which accept a
// number as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.

function dashes_between_even(number) {

    const number_string = number.toString();

    let result = number_string[0];

    const length = number_string.length;

    for (let i = 1; i < length; i++) {
        // if ((number_string[i] % 2 === 0) && (number_string[i - 1] % 2 === 0)) {
        //     result = number_string.slice(0, i) + '-';
        // }
        // else {
        //     result = result + number_string[i];
        // }

        if ((number_string[i] % 2 === 0) && (number_string[i - 1] % 2 === 0)) {
            result = result.concat('-' + number_string[i]);
        }
        else {
            result = result.concat(number_string[i]);
        }


    }

    return result;
}


console.log(dashes_between_even(12322322));
console.log(dashes_between_even(12322322423432423));
console.log(dashes_between_even(1232232223141234));
console.log(dashes_between_even(1234343435678987677));