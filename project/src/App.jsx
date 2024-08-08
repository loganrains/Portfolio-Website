import { useState } from 'react'
import './App.css'
import QSO from './components/QSO.jsx'
import Greetings from './components/Greetings.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greetings/>
      </div>
      <div>
        <QSO/>
      </div>
    </>
  )
}

export default App
