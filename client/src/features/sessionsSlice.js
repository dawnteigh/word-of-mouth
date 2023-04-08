import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("sessions/fetchUser", () => {
  return fetch("/api/me")
    .then((response) => response.json())
    .then(data => data) 
});

export const logInPost = createAsyncThunk("sessions/logInPost", (form) => {
  return fetch("/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: form.username.toLowerCase(),
        password: form.password
      })
    })
    .then(r => r.json())
    .then(user => user)
})

export const signUpPost = createAsyncThunk("sessions/signUpPost", (form) => {
  return fetch('/api/signup', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      username: form.username,
      password: form.password,
      password_confirmation: form.password_confirmation
    })
  })
  .then(r => r.json())
  .then(user => user)
})

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: {
    currentUser: {},
    loggedIn: false,
    status: "idle",
    errors: []
  },
  reducers: {
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
    [logInPost.pending](state) {
      state.status = "loading"
    },
    [logInPost.fulfilled](state, action) {
      state.currentUser = action.payload
      state.loggedIn = true
      state.errors = []
      state.status ="idle"
    },
    [signUpPost.pending](state) {
      state.status = "loading"
    },
    [signUpPost.fulfilled](state, action) {
      state.currentUser = action.payload
      state.loggedIn = true
      state.errors = []
      state.status ="idle"
    }
  },
});

export const { logOut } = sessionsSlice.actions;

export default sessionsSlice.reducer;