export const getData = (data) => {
  return {
    type: "GET_DATA",
    payload: data
  }
}

export const makeFavorite = (id) => {
  return {
    type: "MAKE_FAV",
    payload: id
  }
}

export const addToCart = (id) => {
  return {
    type: "ADD_CART",
    payload: id
  }
}

export const removeCart = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id
  }
}

export const removeAll = () => {
  return {
    type: "REMOVE_ALL_CART"
  }
}