import { it, expect, describe } from 'vitest';
import { esPinValido } from '../src/src/pin';

describe("Test esPinValido", () => {
    it ('comprobar si no es null o si está definido', () => {
        expect(esPinValido).not.toBeNull();
        expect(esPinValido).toBeDefined();
    });
    it ('comprobar que la longitud sea de 4 o de 6 digitos', () => {
        expect(esPinValido("1234")).toBe(true);
        expect(esPinValido("123456")).toBe(true);
    })
    it ('comprobar que sean digitos del 0-9', () => {
        expect(esPinValido("1234")).toBe(true);
        expect(esPinValido("567890")).toBe(true);
    })
     it ('comprobar que no se repitan', () => {
        expect(esPinValido("1111")).toBe(false);
        expect(esPinValido("222222")).toBe(false);
     })
})