import { configureStore } from '@reduxjs/toolkit'
import sessionsReducer from "./reducers/sessionsSlice"
import requestingReducer from "./reducers/requestingReducer"
import errorsReducer from "./reducers/errorsReducer"
import mealsReducer from "./reducers/mealsSlice"
import restaurantsReducer from "./reducers/restaurantsSlice"

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