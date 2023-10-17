// src/components/AnecdoteList.jsx
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const filter = state.filter.toLowerCase() // Get the filter state and convert to lowercase
    return state.anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter)) // Filter based on content
      .sort((a, b) => b.votes - a.votes)
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    console.log('vote', id)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
