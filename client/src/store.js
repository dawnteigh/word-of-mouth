import { configureStore } from '@reduxjs/toolkit'
import sessionsReducer from "./reducers/sessionsSlice"
import mealsReducer from "./reducers/mealsSlice"
import restaurantsReducer from "./reducers/restaurantsSlice"

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    meals: mealsReducer,
    restaurants: restaurantsReducer
  }
})

export default store