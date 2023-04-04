import { configureStore } from '@reduxjs/toolkit'
import sessionsReducer from "./reducers/sessionsReducer"
import requestingReducer from "./reducers/requestingReducer"
import errorsReducer from "./reducers/errorsReducer"
import mealsReducer from "./reducers/mealsReducer"
import restaurantsReducer from "./reducers/restaurantsReducer"

const store = configureStore({
  reducer: {
    errors: errorsReducer,
    requesting: requestingReducer,
    sessions: sessionsReducer,
    meals: mealsReducer,
    restaurants: restaurantsReducer
  }
})

export default store