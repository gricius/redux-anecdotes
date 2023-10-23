# FullStackOpen Exercises 6.3.-6.8.

Let's make a new version of the anecdote voting application from part 1. Take the project from this repository https://github.com/fullstack-hy2020/redux-anecdotes to base your solution on.

# 6.3: anecdotes, step1
Implement the functionality for voting anecdotes. The number of votes must be saved to a Redux store.

# 6.4: anecdotes, step2
Implement the functionality for adding new anecdotes.

You can keep the form uncontrolled like we did earlier.

# 6.5: anecdotes, step3
Make sure that the anecdotes are ordered by the number of votes.

# 6.6: anecdotes, step4
If you haven't done so already, separate the creation of action-objects to action creator-functions and place them in the src/reducers/anecdoteReducer.js file, so do what we have been doing since the chapter action creators.

# 6.7: anecdotes, step5
Separate the creation of new anecdotes into a component called AnecdoteForm. Move all logic for creating a new anecdote into this new component.

# 6.8: anecdotes, step6
Separate the rendering of the anecdote list into a component called AnecdoteList. Move all logic related to voting for an anecdote to this new component.

Now the App component should look like this:

```jsx
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
```

# 6.9 Better anecdotes, step7
Implement filtering for the anecdotes that are displayed to the user.
<img src="https://fullstackopen.com/static/e64e260dbd3b22669115b6eb9dcce7a5/5a190/9ea.png">

Store the state of the filter in the redux store. It is recommended to create a new reducer, action creators, and a combined reducer for the store using the combineReducers function.

Create a new Filter component for displaying the filter. You can use the following code as a template for the component:

```jsx
const Filter = () => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
```

# 6.10 Better anecdotes, step8
Install Redux Toolkit for the project. Move the Redux store creation into the file store.js and use Redux Toolkit's configureStore to create the store.

Change the definition of the filter reducer and action creators to use the Redux Toolkit's createSlice function.

Also, start using Redux DevTools to debug the application's state easier.

# 6.11 Better anecdotes, step9
Change also the definition of the anecdote reducer and action creators to use the Redux Toolkit's createSlice function.

# 6.12 Better anecdotes, step10
The application has a ready-made body for the Notification component:

```jsx
const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
    </div>
  )
}

export default Notification
```

Extend the component so that it renders the message stored in the Redux store, making the component take the following form:

```jsx
import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(/* something here */)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>

      {notification}
    </div>
  )
}
```

You will have to make changes to the application's existing reducer. Create a separate reducer for the new functionality by using the Redux Toolkit's createSlice function.

The application does not have to use the Notification component intelligently at this point in the exercises. It is enough for the application to display the initial value set for the message in the notificationReducer.

# 6.13 Better anecdotes, step11
Extend the application so that it uses the Notification component to display a message for five seconds when the user votes for an anecdote or creates a new anecdote:

<img src='https://fullstackopen.com/static/c82fb74270b3ca5ce1edef02e2cf82bd/5a190/8ea.png'>

It's recommended to create separate action creators for setting and moving notifications.

# 6.14 Anecdotes and the backend, step1
When the application launches, fetch the anecdotes from the backend implemented using json-server.

As the initial backend data, you can use, e.g. <a href="https://github.com/fullstack-hy2020/misc/blob/master/anecdotes.json">this</a>.

# 6.15 Anecdotes and the backend, step2
Modify the creation of new anecdotes, so that the anecdotes are stored in the backend.

# 6.16 Anecdotes and the backend, step3
Modify the initialization of the Redux store to happen using asynchronous action creators, which are made possible by the Redux Thunk library.

# 6.17 Anecdotes and the backend, step4
Also, modify the creation of a new anecdote to happen using asynchronous action creators, made possible by the Redux Thunk library.

# 6.18 Anecdotes and the backend, step5
Voting does not yet save changes to the backend. Fix the situation with the help of the Redux Thunk library.

# Make an action creator, which enables one to provide the notification as follows:

```jsx
dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
```
The first parameter is the text to be rendered and the second parameter is the time to display the notification given in seconds.

Implement the use of this improved notification in your application.

