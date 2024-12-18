const mathBasic = require("./mathBasic");

describe("sebuah fungsi perhitungan matmatika", () => {
    it("harus ada fungsi add", () => {
        expect(mathBasic).toHaveProperty("add");
        expect(mathBasic.add).toBeInstanceOf(Function);
    })
})


describe("fungsi add/tambah", () => {
    it("harus melempar error kalau parameter bukan 2", () => {
        expect(() => mathBasic.add(2)).toThrowError(); // error karena hanya 1 parameter
        expect(() => mathBasic.add()).toThrowError();
        expect(() => mathBasic.add(2,2,3)).toThrowError();
    })
    it("harus angka parameternya", () => {
        expect(() => mathBasic.add("1", undefined)).toThrowError("ga bisa bro"); // case sensitive jdi pasti failed krn beda kata2nya
        expect(() => mathBasic.add(true, "2")).toThrowError("hanya boleh angka");
        expect(() => mathBasic.add(2,null)).toThrowError("hanya boleh angka");
    })
    it("harus hasil dari param1 + param2", () => {
        expect(mathBasic.add(1,2)).toEqual(3);
        expect(mathBasic.add(1,2)).toEqual(3);
        expect(mathBasic.add(1,2)).toEqual(3);
    })
})

