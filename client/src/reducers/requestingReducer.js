const initialState = true

const requestingReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default requestingReducer;