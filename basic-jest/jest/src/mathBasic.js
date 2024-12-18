const MathBasic = {
    add: (...args) => {
        const [firstNumber,secondNumber] = args
        if(args.length !== 2 ) throw new Error("hanya boleh 2 parameter")
        if(typeof firstNumber !== "number" || typeof secondNumber !== "number") throw new Error("hanya boleh angka")
            
        return firstNumber + secondNumber
    }
}

module.exports = MathBasic