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

export const editReview = createAsyncThunk("sessions/editReview", ({ id, form }) => {
  return fetch(`/api/reviews/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(form)
  })
  .then(r => r.json())
  .then(data => data)
})

export const deleteReview = createAsyncThunk("sessions/deleteReview", (id) => {
  return fetch(`/api/reviews/${id}`, { method: "DELETE" })
    .then(r => r.data)
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
    addUserReview(state, action) {
      state.currentUser.reviews.push(action.payload)
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
      if (action.payload.error) {
        state.errors = action.payload.error
        state.status = "idle"
      }
      else {
        state.currentUser = action.payload
        state.loggedIn = true
        state.status = "idle"
        state.errors = []
    }
    },
    [signUpPost.pending](state) {
      state.status = "loading"
    },
    [signUpPost.fulfilled](state, action) {
      if (action.payload.error) {
        state.errors = action.payload.error
        state.status = "idle"
      }
      else {
        state.currentUser = action.payload
        state.loggedIn = true
        state.status = "idle"
        state.errors = []
    }
    },
    [editReview.pending](state) {
      state.status = "loading"
    },
    [editReview.fulfilled](state, action) {
      if (action.payload.error) {
        state.errors = action.payload.error
        state.status = "idle"
      }
      else {
        state.currentUser.reviews = state.currentUser.reviews.map(r => r.id === action.payload.id ? action.payload : r)
        state.status = "idle"
        state.errors = []
    }
    },
    [deleteReview.pending](state) {
      state.status = "loading"
    },
    [deleteReview.fulfilled](state, action) {
        state.currentUser.reviews = state.currentUser.reviews.filter(r => r.id !== action.meta.arg)
        state.status = "idle"
    }   
  }
  
});

export const { addUserReview, logOut } = sessionsSlice.actions;

export default sessionsSlice.reducer;