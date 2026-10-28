import { useState } from 'react'
import { useTodos } from '../context/todocontext'

export default function Home() {
  const [text, setText] = useState('')
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()

  const submitTodo = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <main className="page home-page">
      <section className="intro">
        <p className="eyebrow">Your simple task planner</p>
        <h1>Make space for what matters.</h1>
        <p>Keep today focused with a short, calm list of things you want to accomplish.</p>
      </section>

      <section className="todo-panel" aria-labelledby="todo-heading">
        <div className="panel-heading">
          <h2 id="todo-heading">Today</h2>
          <span>{todos.filter((todo) => !todo.completed).length} remaining</span>
        </div>

        <form className="todo-form" onSubmit={submitTodo}>
          <label htmlFor="new-todo">New task</label>
          <div className="input-row">
            <input
              id="new-todo"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="What needs to be done?"
            />
            <button type="submit">Add task</button>
          </div>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'todo completed' : 'todo'}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
              </label>
              <button
                type="button"
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
                aria-label={`Delete ${todo.text}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="empty-state">Your list is clear. Add a task to get started.</p>
        )}
      </section>
    </main>
  )
}
