import {useEffect, useState} from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0)
    const isNumber = (n:string) => !!Number(n)
    const isLetter = (n: string) => /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]$/i.test(n);
    const isSymbol = (n:string) => !!n.match(/[\W_]/g);
    let showMessage = (m: number) => {
        return strength === -1 ? 'Min 8 characters' :
            strength === 0 ? '' :
                strength === 1 ? 'weak password' :
                    strength === 2 ? 'medium difficulty' :
                        strength === 3 ? 'strong password' : 'grey'
    }
    const sectionStyleFirst = {
        backgroundColor:
            strength === -1 ? 'red' :
                strength === 0 ? 'grey' :
                    strength === 1 ? 'red' :
                        strength === 2 ? 'yellow' :
                            strength === 3 ? 'green' : 'grey'

    }
    const sectionStyleSecond = {
        backgroundColor:
            strength === -1 ? 'red' :
                strength === 0 ? 'grey' :
                    strength === 1 ? 'grey' :
                        strength === 2 ? 'yellow' :
                            strength === 3 ? 'green' : 'grey'

    }
    const sectionStyleThird = {
        backgroundColor:
            strength === -1 ? 'red' :
                strength === 0 ? 'grey' :
                    strength === 1 ? 'grey' :
                        strength === 2 ? 'grey' :
                            strength === 3 ? 'green' : 'grey'

    }
    let isStrength = (p:string) => {
      let check = p.split('')
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
    useEffect(() => {
        isStrength(password)
    },[password])
  return (
    <div className="App">
        <label>Enter the password</label>
        <div className="container">
            <input
                type="text"
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <div className="containerForSections">
        <section style={sectionStyleFirst}></section>
        <section style={sectionStyleSecond}></section>
        <section style={sectionStyleThird}></section>
            </div>
            {showMessage(strength)}
        </div>
        <label className="description">
            A good password should contain latin letters, symbols and numbers
        </label>
    </div>
  )
}

export default App
