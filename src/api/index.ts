const todos = [
  { id: 1, name: "代办1", done: false },
  { id: 2, name: "代办2", done: false },
  { id: 3, name: "代办3", done: false }
]

type Url = "/api/todos" | "/api/toggle" | "/api/add"

const axios = <T>(url: Url, payload?: any): Promise<T> | never => {
  let data
  switch (url) {
    case "/api/todos":
      break
    case "/api/toggle":
      todos.forEach(item => {
        if (item.id === payload) item.done = !item.done
      })

      break
    case "/api/add":
      let l = todos.length
      if (payload) {
        let item = {
          id: ++l,
          name: payload,
          done: false
        }
        todos.push(item)
      }
      break
    default:
      throw new Error("Unknown api")
  }
  data = todos.slice()
  return Promise.resolve(data as any)
}

export default axios
