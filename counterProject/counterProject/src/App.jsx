import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Adding = () => {
    console.log("added value : ",count);
    if(count === 20)
      setCount(20)
    else
      setCount(count+1)
  }

  const Sub = () => {
    console.log("sub value : ",count);
    if(count === 0)
      setCount(0)
    else
      setCount(count-1)
  }
  return (
    <>
      <h1>React with Vite</h1>
      <h2>counter : {count}</h2>
      <button onClick={Adding}>Add</button><br />
      <button onClick={Sub}>Remove</button>
    </>
  )
}

export default App
