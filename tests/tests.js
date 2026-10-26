import { it, expect, describe } from 'vitest';
import { fibonacci, esPinValido } from '../src/src/calc';

describe("Test fibonacci", () => {
    it("fibonacci", () => {
        expect(fibonacci(4)).toBe(3);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
        expect(fibonacci(-2)).console.log("Introduce números positivos")
    })
})