import { describe, it, expect } from "vitest";
import { max } from "../src/sample.js";

describe("max", () => {
    it("should return the first argument if it is greater", () => {
        expect(max(2, 1)).toBe(2);
    });
    it("should return the second argument if it is greater", () => {
        expect(max(11, 12)).toBe(12);
    });
    it("should return the first argument if it is equal", () => {
        expect(max(3, 3)).toBe(3);
    });
})
