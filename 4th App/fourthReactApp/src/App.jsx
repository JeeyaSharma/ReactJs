import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [first,setFirst] = useState(0)
  const [color,setColor] = useState(0)


  // Case 1: run on every render
  /*
  useEffect(() => {
    alert("I wil run on every render")
  }) 
  */

  /*
    Case 2: runs only on first render

    useEffect(() => {
    alert("Hey Welcome to my page. This is the first Render")
  },[])
  */


  /*
    Case 3: run only when certain values change
    useEffect(() => {
      alert("Count was Changed")
      setColor(count+1)
    },[count])
  */

    useEffect(() => {
      setColor(count+1)
    },[count])

    
 
  return (
    <>
      <Navbar color={"navy"+" blue"+color}/>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
