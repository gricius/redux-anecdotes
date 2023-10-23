// src/reducers/notificationReducer.js
import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification: (state, action) => {
      return action.payload
    },
    clearNotification: () => {
      return ''
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

// Action creator for setting notifications with a timeout
export const setNotificationWithTimeout = (message, timeout) => {
  return (dispatch) => {
    dispatch(setNotification(message))

    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout)
  }
}
export default notificationSlice.reducer