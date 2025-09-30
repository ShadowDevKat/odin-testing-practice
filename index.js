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