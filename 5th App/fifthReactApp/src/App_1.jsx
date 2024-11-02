import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnRef = useRef()
  useEffect(() => {
    console.log(`First Render`)
    btnRef.current.style.backgroundColor="red"
  },[]);

  return (
    <>
      
      <div className="card">
        <button  ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={()=>{btnRef.current.style.display="none"}}>Click Me</button>
    </>
  )
}

export default App
