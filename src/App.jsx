import { useState } from 'react'
import logo from './assets/Jakes_Wines_Logo_Pack/01_Master/Jakes-Wines_Logo_Trimmed_Transparent.png'
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
      <p className="coming-soon">Wholesale Wine Merchant Coming Soon!</p>
    </main>
  )
}

export default App
