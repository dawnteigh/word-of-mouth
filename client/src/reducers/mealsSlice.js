import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", () => {
  return fetch("/meals")
    .then((response) => response.json())
    .then((data) => data)
});

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    entities: [], // array of meals
    status: "idle", // loading state
  },
  reducers: {
    mealAdded(state, action) {
      state.entities.push(action.payload);
    },
    mealUpdated(state, action) {
      const meal = state.entities.find((m) => m.id === action.payload.id);
      meal.name = action.payload.name;
    },
  },
  extraReducers: {
    [fetchMeals.pending](state) {
      state.status = "loading";
    },
    [fetchMeals.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { mealAdded, mealUpdated } = mealsSlice.actions;

export default mealsSlice.reducer;