import React from 'react'
import './post.css'

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
        className="post-thumb"
        alt="post header"
        src={props.thumbnailUrl}
        />
      </div>
      <div className="post-username">
      {props.username}
      </div>
    </div>
  )
}

export default PostHeader