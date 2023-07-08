import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  const response = await fetch("/api/meals");
  const data = await response.json();
  return data;
});

export const addMealWithReview = createAsyncThunk("meals/addMealWithReview", async (configObj) => {
  const r = await fetch('/api/meals', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(configObj)
  });
  const data = await r.json();
  return data;
})

export const addReviewToMeal = createAsyncThunk("meals/addReviewToMeal", async (configObj) => {
  const r = await fetch("/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(configObj)
  });
  const data = await r.json();
  return data;
})

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    entities: [], // array of meals
    status: "idle", // loading state
    errors: [],
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
      if (!meal.reviews.find(r => r.restaurant.id === action.payload.restaurant.id)) {
        meal.restaurants = meal.restaurants.filter(r => r.id !== action.payload.restaurant.id)
      }
      if (!meal.reviews[0]) {
        state.entities = state.entities.filter(m => m.id !== meal.id)
      }
    },
    setMeal(state, action) {
      state.selectedMeal = parseInt(action.payload)
    },
    resetReview(state) {
      state.newReview = null
    },
    resetMealErrors(state) {
      state.errors = []
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
      if (action.payload.error) {
        state.errors = action.payload.error
        state.status = "idle"
      }
      else {
        state.entities.push(action.payload);
        state.status = "idle";
        state.selectedMeal = null;
        state.newReview = action.payload.reviews[0]
        state.errors = []
      }
    },
    [addReviewToMeal.pending](state) {
      state.status = "loading";
    },
    [addReviewToMeal.fulfilled](state, action) {
      if (action.payload.error) {
        state.errors = action.payload.error
        state.status = "idle"
      }
      else {
        const meal = state.entities.find(m => m.id === state.selectedMeal)
        meal.reviews.push(action.payload)
        if (!meal.restaurants.find(r => r.id === action.payload.restaurant.id)) {
          meal.restaurants.push(action.payload.restaurant)
        }
        state.status = "idle";
        state.selectedMeal = null;
        state.newReview = action.payload
        state.errors = []
      }
    }
  },
});

export const { mealReviewUpdated, mealReviewDeleted, setMeal, resetReview, resetMealErrors } = mealsSlice.actions;

export default mealsSlice.reducer;