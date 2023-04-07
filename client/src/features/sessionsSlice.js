import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("sessions/fetchUser", () => {
  return fetch("/api/me")
    .then((response) => response.json())
    .then(data => data)
});

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: {
    currentUser: {},
    loggedIn: false,
    status: "idle",
    errors: []
  },
  reducers: {
    logIn(state, action) {
      state.currentUser = action.payload
      state.loggedIn = true
      state.errors = []
    },
    logOut(state) {
      state.currentUser = {}
      state.loggedIn = false
    },
  },
  extraReducers: {
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
      if (action.payload.error) {
        state.errors = action.payload.error
        state.status = "idle"
      }
      else {
      state.currentUser = action.payload;
      state.loggedIn = true;
      state.status = "idle";
    }
    },
  },
});

export const { logIn, logOut } = sessionsSlice.actions;

export default sessionsSlice.reducer;