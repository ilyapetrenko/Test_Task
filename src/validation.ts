const isNumber = (n:string) => !!Number(n)
const isLetter = (n: string) => /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]$/i.test(n);
const isSymbol = (n:string) => !!n.match(/[\W_]/g);

export const isStrength = (password:string, setStrength: (strength: number) => void) => {
    let check = password.split('')
    if (check.length < 8 && check.length > 0){
        setStrength(-1)
        return false
    }
    let digits = 0
    let letters = 0
    let symbols = 0
    for (let i=0; i<check.length; i++){
        if (isNumber(check[i])) digits = 1
        if (isLetter(check[i])) letters=1
        if (isSymbol(check[i])) symbols=1
    }
    let sum = digits + letters + symbols
    setStrength(sum)
}
