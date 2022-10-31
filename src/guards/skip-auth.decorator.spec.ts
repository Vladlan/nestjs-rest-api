import { SkipAuth } from "./skip-auth.decorator";

describe("SkipAuth", () => {
    it("Should return SetMetadata fn", () => {
        const res = SkipAuth();
        expect(res.KEY).toBe("skip-auth")
    })
})