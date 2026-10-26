import { it, expect } from 'vitest';
import { fibonacci, esPinValido } from '../src/src/calc';

describe("Test esPinValido", () => {
    it ('comprobar si no es null o si está definido', () => {
        expect(esPinValido).not.toBeNull();
        expect(esPinValido).toBeDefined();
    });
    it ('comprobar que la longitud sea de 4 o de 6 digitos', () => {
        expect(esPinValido("1234")).toBeTrue();
        expect(esPinValido("123456")).toBeTrue();
    })
    it ('comprobar que sean digitos del 0-9', () => {
        expect(esPinValido("1234")).toBeTrue();
        expect(esPinValido("567890")).toBeTrue();
    })
     it ('comprobar que no se repitan', () => {
        expect(esPinValido("1111")).toBe(false);
        expect(esPinValido("222222")).toBe(false);
    })
})