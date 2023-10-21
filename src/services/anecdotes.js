// src/services/anecdotes.js
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteAnecdote = async (id) => {
  const anecdotes = await getAll()
  const anecdoteToVote = anecdotes.find((anecdote) => anecdote.id === id)
  const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, votedAnecdote)
  return response.data
}

const anecdoteService = { getAll, createNew, voteAnecdote }
export default anecdoteService
