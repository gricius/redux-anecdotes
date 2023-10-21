import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import anecdotesService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

anecdotesService.getAll().then(anecdotes =>
  store.dispatch(setAnecdotes(anecdotes))
)

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)