import { configureStore } from '@reduxjs/toolkit'
import sessionsReducer from "./features/sessionsSlice"
import mealsReducer from "./features/mealsSlice"
import restaurantsReducer from "./features/restaurantsSlice"

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    meals: mealsReducer,
    restaurants: restaurantsReducer
  }
})

export default store