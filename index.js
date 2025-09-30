export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(word) {
    return word.split('').reverse().join('')
}

export const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    div(a, b) {
        return a / b;
    },
    mul(a, b) {
        return a * b;
    }
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((a, b) => a + b) / arr.length,
        length: arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
    }
}

export function caesarCipher(str, shift) {
    let result = "";
    shift = shift % 26;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'A' && char <= 'Z') {
            let charCode = char.charCodeAt(0);
            let shiftedCharCode = ((charCode - 'A'.charCodeAt(0) + shift + 26) % 26) + 'A'.charCodeAt(0);
            result += String.fromCharCode(shiftedCharCode);
        } else if (char >= 'a' && char <= 'z') {
            let charCode = char.charCodeAt(0);
            let shiftedCharCode = ((charCode - 'a'.charCodeAt(0) + shift + 26) % 26) + 'a'.charCodeAt(0);
            result += String.fromCharCode(shiftedCharCode);
        } else {
            result += char; 
        }
    }
    return result;
}