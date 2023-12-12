import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-300 text-black rounded-xl p-4 mb-4">Tailwind Class</h1>
      <Card username='Tushar' btnText='Click to visit my Profile'/>
      <Card username='Hitesh' btnText='My Profile'/>

    </>
  )
}

export default App
