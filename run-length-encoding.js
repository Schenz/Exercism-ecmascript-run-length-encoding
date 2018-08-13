export function encode(str) {
    let strArray, count, previousLetter, output;

    if (str === '') {
        return '';
    } else {
        strArray = str.split('');
        count = 1;
        previousLetter = '';
        output = '';
        strArray.forEach(letter => {
            if (letter === previousLetter) {
                count++;
            } else {
                if (count === 1) {
                    output += previousLetter;
                } else {
                    output += `${count}${previousLetter}`;
                }

                count = 1;
                previousLetter = letter;
            }
        });

        // get the last one
        if (strArray[strArray.length - 1] === previousLetter) {
            if (count === 1) {
                output += previousLetter;
            } else {
                output += `${count++}${previousLetter}`;
            }
        } else {
            output += `${strArray[strArray.length]}`;
        }

        return output;
    }
}

export function decode(str) {
    let strArray, count, output;

    if (str === '') {
        return ''
    } else {
        strArray = str.split('');
        output = '';
        count = '';
        strArray.forEach(letter => {
            if (isNumeric(letter)) {
                count += letter;
            } else {
                if (count === '') {
                    output += letter;
                } else {
                    output += letter.repeat(count);
                }

                count = '';
            }
        });

        return output;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}