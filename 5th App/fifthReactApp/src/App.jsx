import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)
  useEffect(() => {
    a.current=a.current+1
    console.log(`Rerendering and the value of a is ${a.current}`)
  });

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
