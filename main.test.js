import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from ".";

test("Capitalize first letter of word", () => {
    expect(capitalize('word')).toBe('Word');
});

test("Reverse string", () => {
    expect(reverseString('word')).toBe('drow');
});

test("Add: 2+2=4", () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test("Sub: 3-1=2", () => {
    expect(calculator.sub(3, 1)).toBe(2);
});

test("Divide: 9/3=3", () => {
    expect(calculator.div(9, 3)).toBe(3);
});

test("Mul: 2*3=6", () => {
    expect(calculator.mul(2, 3)).toBe(6);
});

test('Caesar Cipher xyz become abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test("Caesar Cipher 'Hello, World!' becomes 'Khoor, Zruog!'", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test("analyzes the array [1,8,3,4,2,6] and provides an average, min, max, and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        length: 6,
        min: 1,
        max: 8,
    });
});