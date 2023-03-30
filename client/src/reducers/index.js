import { combineReducers } from "redux"
import sessionsReducer from "./sessionsReducer"
import requestingReducer from "./requestingReducer"
import errorsReducer from "./errorsReducer"
import mealsReducer from "./mealsReducer"
import restaurantsReducer from "./restaurantsReducer"

export default combineReducers({
  errors: errorsReducer,
  requesting: requestingReducer,
  sessions: sessionsReducer,
  meals: mealsReducer,
  restaurants: restaurantsReducer
})