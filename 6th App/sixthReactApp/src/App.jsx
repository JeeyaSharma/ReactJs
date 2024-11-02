import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] =useState(false)
  const [todos,setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a Good Todo"
    },
    {
      title: "Hey Another Todo",
      desc: "I am a Good Todo too"
    },
    {
      title: "Hey I am a grocery todo",
      desc: "I am a Good Todo but I am a grocery Todo"
    }
  ])

  const Todo= ({todo}) => {return (<>
  <div className="m-4 border-1">
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
  </div>
  </>)}

  return (
    <>
      
      {showBtn?<button>The button Shown is True</button>:<button>The button Shown is False</button>}
      {/* {showBtn && <button>The button Shown is True</button>} */}
      
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key={todo.title} className="m-4 border-1">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
      })}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Toggle Btn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
