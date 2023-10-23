// src/components/Filter.js
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const filterText = event.target.value
    dispatch(setFilter(filterText))
    dispatch(setNotificationWithTimeout(`you filtered '${filterText}'`, 10000))
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