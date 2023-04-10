import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", () => {
  return fetch("/api/meals")
    .then((response) => response.json())
    .then((data) => data)
});

export const addMealWithReview = createAsyncThunk("meals/addMealWithReview", (configObj) => {
  return  fetch('/api/meals', configObj)
  .then(r => r.json())
  .then(data => data)
})

export const addReviewToMeal = createAsyncThunk("meals/addReviewToMeal", (configObj) => {
  return fetch("/api/reviews", configObj)
  .then(r => r.json())
  .then(data => data)
})

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    entities: [], // array of meals
    status: "idle", // loading state
    selectedMeal: null // for case where user is creating a review for an existing meal
  },
  reducers: {
    mealUpdated(state, action) {
      const meal = state.entities.find((m) => m.id === action.payload.id);
      meal.name = action.payload.name;
    },
    setMeal(state, action) {
      state.selectedMeal = parseInt(action.payload)
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
    },
    [addReviewToMeal.pending](state) {
      state.status = "loading";
    },
    [addReviewToMeal.fulfilled](state, action) {
      const meal = state.entities.find(m => m.id === action.payload.meal_id)
      meal.reviews.push(action.payload)
      state.status = "idle";
    }
  },
});

export const { mealUpdated, setMeal } = mealsSlice.actions;

export default mealsSlice.reducer;