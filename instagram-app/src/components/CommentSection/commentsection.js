import React from 'react'
import PropTypes from 'prop-types'
import './comment.css'

const CommentSection = props => {
  return (
    <div className="comment-text">
      <span className="comment">{props.comment.text}</span>{''}
      <span className="user">--{props.comment.username}</span>
    </div>
  )
}


export default CommentSection