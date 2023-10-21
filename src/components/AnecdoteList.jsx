// src/components/AnecdoteList.jsx
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import anecdotesService from "../services/anecdotes"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const filter = state.filter.toLowerCase() // Get the filter state and convert to lowercase
    return state.anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter)) // Filter based on content
      .sort((a, b) => b.votes - a.votes)
  })
  const dispatch = useDispatch()

  const vote = async (id) => {
    try {
      await anecdotesService.voteAnecdote(id)
      dispatch(voteAnecdote(id))
      dispatch(setNotification(`You voted for "${anecdotes.find(a => a.id === id).content}"`))
      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000);
    } catch (error) {
      console.error("Failed to update vote in the database:", error)
      dispatch(setNotification("Failed to update vote in the database"))
    }
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
