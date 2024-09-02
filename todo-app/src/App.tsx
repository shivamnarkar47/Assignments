import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("")
  const [check, setChecked] = useState(false)
  const addTodo = (e) => {
    e.preventDefault()
    setError("")
    if (newTodo != "") {
      setTodo([...todo, newTodo]);
    }
    else {
      setError("Please enter something")
    }
  }
  const deleteTodo = (idx: number) => {
    todo.splice(idx, 1);
    setTodo([...todo])

  }
  const checked = (e) => {
    console.log(e.target.checked)
    setChecked(e.target.checked)

  }
  console.log(todo.length)
  return (
    <>
      <form onSubmit={addTodo}>
        <input onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      {todo.length > 0 &&
        <ul>
          {todo.map((t, i) => {
            return (

              <li key={i} style={{ display: 'flex', width: "100%", alignItems: 'center', }}><input type="checkbox" onClick={checked} /> <p style={!check ? { padding: '10px', textDecoration: "none" } : { padding: '10px', textDecoration: 'line-through' }} id="list">{t}</p><button style={{ padding: '3px' }} onClick={() => deleteTodo(i)}>Delete</button></li>
            )
          })}
        </ul>}
      <style>

      </style>
      {error != "" && <p>{error}</p>}
    </>
  )
}

export default App
