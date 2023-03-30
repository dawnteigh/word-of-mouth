const initialState = []

const errorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default errorsReducer;