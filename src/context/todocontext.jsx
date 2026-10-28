/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const TodoContext = createContext(null)

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Plan your day', completed: false },
    { id: 2, text: 'Finish the important task', completed: false },
  ])

  const addTodo = (text) => {
    const cleanText = text.trim()
    if (!cleanText) return
    setTodos((current) => [
      ...current,
      { id: Date.now(), text: cleanText, completed: false },
    ])
  }

  const toggleTodo = (id) => {
    setTodos((current) => current.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ))
  }

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodos() {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodos must be used inside TodoProvider')
  }
  return context
}
