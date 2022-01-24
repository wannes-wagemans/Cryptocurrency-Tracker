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
        if (item.cart) {
          return {
            ...item,
            cart: item.cart + 1
          }
        }
        return {
          ...item,
          cart: 1
        }
      })
    case "REMOVE_CART":
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item
        }
        if (item.cart) {
          return {
            ...item,
            cart: item.cart - 1
          }
        }
      })
    case "REMOVE_ALL_CART":
      return state.map((item) => {
        return {
          ...item,
          cart: 0
        }
      })
    default:
      return state
  }
}

export default listReducer