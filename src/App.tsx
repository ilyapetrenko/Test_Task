import {useEffect, useState} from 'react'
import {isStrength} from "./validation";

function App() {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0)

    useEffect(() => {
        isStrength(password, setStrength)
    },[password])

    const showMessage = (m: number) => {
        return strength === -1 ? 'Min 8 characters' :
            strength === 0 ? '' :
                strength === 1 ? 'weak password' :
                    strength === 2 ? 'medium difficulty' :
                        strength === 3 ? 'strong password' : 'grey'
    }

    const getSectionStyle = (section: number) => {
        let backgroundColor
        backgroundColor = strength === -1 ? "red"
            : backgroundColor = strength === 0 ? "grey"
                : backgroundColor = strength === 1 ? section === 1 ? "red" : "grey"
                    : backgroundColor = strength === 2 ? section <= 2 ? "yellow" : "grey" : "green";
        return { backgroundColor }
    }

  return (
    <div className="App">
        <label>Enter the password</label>
        <div className="container">
            <input
                type="text"
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <div className="containerForSections">
        <section style={getSectionStyle(1) }></section>
        <section style={getSectionStyle(2) }></section>
        <section style={getSectionStyle(3) }></section>
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
