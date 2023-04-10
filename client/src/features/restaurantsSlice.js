import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk("restaurants/fetchRestaurants", () => {
  return fetch("/api/restaurants")
    .then((response) => response.json())
    .then((data) => data)
});

export const addRestaurant = createAsyncThunk("restaurants/addRestaurant", (data) => {
  return fetch("/api/restaurants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      address: data.address
    })
  })
  .then(r => r.json())
  .then(data => data)
})

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [], // array of restaurants
    status: "idle", // loading state
    selectedRestaurant: null // id of restaurant in review
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
    [addRestaurant.pending](state) {
      state.status = "loading";
    },
    [addRestaurant.fulfilled](state, action) {
      state.entities.push(action.payload);
      state.selectedRestaurant = action.payload.id
      state.status = "idle";
    },
  },
});

export const { restaurantAdded, restaurantUpdated } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;