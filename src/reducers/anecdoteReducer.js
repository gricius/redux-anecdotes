// src/reducers/anecdoteReducer.js
import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdotes: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes: (state, action) => {
      return action.payload
    },
  },
})

export const { appendAnecdotes, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
} 

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdotes(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
    const currentAnecdotes = getState().anecdotes
    const anecdoteToVote = currentAnecdotes.find((anecdote) => anecdote.id === id)

    if (!anecdoteToVote) {
      console.error('Anecdote not found in the current state.')
      return
    }

    try {
      const response = await anecdotesService.voteAnecdote(anecdoteToVote.id)
      const votedAnecdote = response.id
      const updatedAnecdotes = currentAnecdotes.map((anecdote) =>
        anecdote.id !== votedAnecdote ? anecdote : response
      )

      dispatch(setAnecdotes(updatedAnecdotes))
    } catch (error) {
      console.error('Error voting for anecdote:', error)
    }
  }
}

export default anecdoteSlice.reducer