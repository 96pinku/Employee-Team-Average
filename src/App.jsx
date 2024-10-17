import { useState } from 'react'
import './App.css'
import Employees from './Components/Employees';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Employees/>
    </>
  )
}

export default App;
