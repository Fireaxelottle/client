import React from 'react'
import propTypes from 'prop-types'

const Message = ({message}) => {
  return (
    <div
    className="alert alert-warning alert-dismissible fade show fs-10 "
    role="alert">
    {message}
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"></button>
  </div>
  )

  
}

export default Message
