const initialState = {
  currentUser: {

  },
  loggedIn: true
}

const sessionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case "SIGNUP":
    return {
      currentUser: payload,
      loggedIn: true
    }
    case "LOGOUT":
      return initialState
  default:
    return state
  }
}

export default sessionsReducer;
