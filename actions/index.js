const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"

const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    ...payload
  }
}


const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export {
  addItem,
  removeItem
}
