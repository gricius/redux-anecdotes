// src/components/AnecdoteList.jsx
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotificationWithTimeout } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const filter = state.filter.toLowerCase()
    return state.anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter)) 
      .sort((a, b) => b.votes - a.votes)
  })
  const dispatch = useDispatch()

  const handleVote = async (id) => {
    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(voteAnecdote(id))
    dispatch(setNotificationWithTimeout(`you voted '${anecdote.content}'`, 10000))
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
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
