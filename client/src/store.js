import { configureStore } from '@reduxjs/toolkit'
import sessionsReducer from "./reducers/sessionsSlice"import errorsReducer from "./reducers/errorsReducer"
import mealsReducer from "./reducers/mealsSlice"
import restaurantsReducer from "./reducers/restaurantsSlice"

const store = configureStore({
  reducer: {
    errors: errorsReducer,
    sessions: sessionsReducer,
    meals: mealsReducer,
    restaurants: restaurantsReducer
  }
})

export default store