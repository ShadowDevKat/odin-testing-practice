import capitalize from './capitalize';

test("Capitalize first letter of word", () => {
    expect(capitalize('word')).toBe('Word');
});