import { useState } from 'react'
import './App.css'
import QSO from './components/QSO.jsx'
import Greetings from './components/Greetings.jsx'
import ContactInfo from './components/ContactInfo.jsx'
import Bio from './components/Bio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greetings/>
      </div>
      <div>
        <ContactInfo/>
      </div>
      <div>
        <Bio/>
      </div>
      <div>
        <QSO/>
      </div>
    </>
  )
}

export default App
