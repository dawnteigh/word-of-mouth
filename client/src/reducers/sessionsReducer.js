const initialState = {
  currentUser: {

  },
  loggedIn: true
}

const sessionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default sessionsReducer;
