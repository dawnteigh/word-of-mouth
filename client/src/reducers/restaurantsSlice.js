import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk("restaurants/fetchRestaurants", () => {
  return fetch("/restaurants")
    .then((response) => response.json())
    .then((data) => data)
});

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [], // array of restaurants
    status: "idle", // loading state
  },
  reducers: {
    restaurantAdded(state, action) {
      state.entities.push(action.payload);
    },
    restaurantUpdated(state, action) {
      const restaurant = state.entities.find((r) => r.id === action.payload.id);
      restaurant.name = action.payload.name;
      restaurant.address = action.payload.address;
    },
  },
  extraReducers: {
    [fetchRestaurants.pending](state) {
      state.status = "loading";
    },
    [fetchRestaurants.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { restaurantAdded, restaurantUpdated } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;