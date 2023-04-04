const initialState = []

const mealsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_MEAL":
      return [...state, payload]
    default:
      return state
  }
}

export default mealsReducer;