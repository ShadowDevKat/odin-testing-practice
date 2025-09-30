import { capitalize } from ".";

test("Capitalize first letter of word", () => {
    expect(capitalize('word')).toBe('Word');
});