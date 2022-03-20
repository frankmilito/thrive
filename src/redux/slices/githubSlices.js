import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const getUserRepositories = createAsyncThunk(
  "repos/list",
  async (user, {rejectWithValue, getState, dispatch}) => {
    try {
      const {data} = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=30&sort=asc`
      )
      return data
    } catch (error) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response)
    }
  }
)

export const getUserProfile = createAsyncThunk(
  "profile/list",
  async (user, {rejectWithValue, getState, dispatch}) => {
    try {
      const {data} = await axios.get(`https://api.github.com/users/${user}`)
      return data
    } catch (error) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response)
    }
  }
)

// Create Slices

const reposSlices = createSlice({
  name: "repos",
  initialState: {
    user: "franklin",
  },
  extraReducers: builder => {
    // *  Fetch list of repositories
    builder.addCase(getUserRepositories.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(getUserRepositories.fulfilled, (state, action) => {
      state.loading = false
      state.reposList = action?.payload
      state.error = undefined
    })

    builder.addCase(getUserRepositories.rejected, (state, action) => {
      state.loading = false
      state.reposList = undefined
      state.error = undefined
    })

    // * Get user Profile
    builder.addCase(getUserProfile.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.loading = false
      state.profile = action?.payload
      state.error = undefined
    })

    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.loading = false
      state.profile = undefined
      state.error = action?.payload
    })
  },
})

export default reposSlices.reducer
