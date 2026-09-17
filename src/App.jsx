import { useState } from 'react'
import logo from './assets/Jakes-Wines_Logo_White_512px.png'
import './App.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="landing-page">
      <img
        src={logo}
        alt="Jake's Wines"
        className="logo"
      />
      <p className="coming-soon">Coming soon!</p>
    </main>
  )
}

export default App
