import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk("restaurants/fetchRestaurants", async () => {
  const response = await fetch("/api/restaurants");
  const data = await response.json();
  return data;
});

export const addRestaurant = createAsyncThunk("restaurants/addRestaurant", async (formData) => {
  const r = await fetch("/api/restaurants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.name,
      address: formData.address
    })
  });
  const data = await r.json();
  return data;
})

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [], // array of restaurants
    status: "idle", // loading state
    errors: [],
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
    setRestaurant(state, action) {
      state.selectedRestaurant = parseInt(action.payload) // dispatched with the id of clicked restaurant or null after review submission
    },
    resetRestErrors(state) {
      state.errors = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = "idle";
      })
      .addCase(addRestaurant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          state.entities.push(action.payload);
          state.selectedRestaurant = action.payload.id
          state.errors = []
          state.status = "idle";
        }
      })
  }
})

export const { restaurantAdded, restaurantUpdated, setRestaurant, resetRestErrors } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;