import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", () => {
  return fetch("/api/meals")
    .then((response) => response.json())
    .then((data) => data)
});

export const addMealWithReview = createAsyncThunk("meals/addMealWithReview", (configObj) => {
  return  fetch('/api/meals', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(configObj)
  })
  .then(r => r.json())
  .then(data => data)
})

export const addReviewToMeal = createAsyncThunk("meals/addReviewToMeal", (configObj) => {
  return fetch("/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(configObj)
  })
  .then(r => r.json())
  .then(data => data)
})

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    entities: [], // array of meals
    status: "idle", // loading state
    selectedMeal: null, // for case where user is creating a review for an existing meal
    newReview: null
  },
  reducers: {
    mealReviewUpdated(state, action) {
      const meal = state.entities.find((m) => m.id === action.payload.meal.id);
      meal.reviews = meal.reviews.map(r => r.id === action.payload.id ? action.payload : r)
    },
    mealReviewDeleted(state, action) {
      let meal = state.entities.find((m) => m.id === action.payload.meal.id);
      meal.reviews = meal.reviews.filter(r => r.id !== action.payload.id)
    },
    setMeal(state, action) {
      state.selectedMeal = parseInt(action.payload)
    },
    resetReview(state) {
      state.newReview = null
    }
  },
  extraReducers: {
    [fetchMeals.pending](state) {
      state.status = "loading";
    },
    [fetchMeals.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [addMealWithReview.pending](state) {
      state.status = "loading";
    },
    [addMealWithReview.fulfilled](state, action) {
      state.entities.push(action.payload);
      state.status = "idle";
      state.selectedMeal = null;
      state.newReview = action.payload.reviews[0]
    },
    [addReviewToMeal.pending](state) {
      state.status = "loading";
    },
    [addReviewToMeal.fulfilled](state, action) {
      const meal = state.entities.find(m => m.id === state.selectedMeal)
      meal.reviews.push(action.payload)
      state.status = "idle";
      state.selectedMeal = null;
      state.newReview = action.payload
    }
  },
});

export const { mealReviewUpdated, mealReviewDeleted, setMeal, resetReview } = mealsSlice.actions;

export default mealsSlice.reducer;