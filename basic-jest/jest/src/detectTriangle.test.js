const detectTriangle = require("./detectTriangle");

describe("sebuah fungsi detectTriangle", () => {
    it("harus segi sama sisi saat semua nilai sisi sama", () => {
        expect(detectTriangle(4,4,4)).toEqual("Segitiga sama sisi")
    })

    it("harus segi sama kaki saat 2 nilai sisi sama", () => {
        expect(detectTriangle(2,2,1)).toEqual("Segitiga sama kaki")
    })

    it("harus segi sembarang saat tidak ada nilai sisi sama", () => {
        expect(detectTriangle(3,2,1)).toEqual("Segitiga sembarang")
    })
})