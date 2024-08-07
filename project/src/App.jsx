import { useState } from 'react'
import './App.css'
import Greeter from './components/Greeter.jsx'
import Qualifications from './components/Qualifications.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greeter/>
      </div>
      <div>
        <h1>Logan's Qualifications</h1>
        <Qualifications/>
      </div>
    </>
  )
}

export default App
