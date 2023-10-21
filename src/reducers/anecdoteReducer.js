// src/reducers/anecdoteReducer.js
import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote: (state, action) => {
      state.push(action.payload)
    },
    voteAnecdote: (state, action) => {
      const id = action.payload
      const anecdoteToVote = state.find((anecdote) => anecdote.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1
      }
    },
    appendAnecdotes: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes: (state, action) => {
      return action.payload
    },
  },
})

export const { createAnecdote, voteAnecdote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer