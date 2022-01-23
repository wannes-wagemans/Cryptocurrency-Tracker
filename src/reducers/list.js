let amount = 0

const listReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.payload
    case "MAKE_FAV":
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item
        }
        return {
          ...item,
          favorite: !item.favorite
        }
      })
    case "ADD_CART":
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item
        }
        return {
          ...item,
          cart: amount += 1
        }
      })
    case "ADD_TODO":
      return [...state, {
        id: Date.now(),
        text: action.payload.text,
        color: action.payload.color,
        completed: false,
      }]
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload)
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}

export default listReducer