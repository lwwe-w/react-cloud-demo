import React, { useState } from "react"
import axios from "../api/index"

interface Props {
  refreshTodos: () => void
}
const TodoForm: React.FC<Props> = ({ refreshTodos }) => {
  const [name, setName] = useState("")
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim()) {
      await axios("/api/add", name)
      refreshTodos()
      setName("")
    }
  }
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input
        className="todo-input"
        value={name}
        onChange={onChange}
        placeholder="请输入代办事项"
      />
      <button type="submit">新增</button>
    </form>
  )
}

export default TodoForm
