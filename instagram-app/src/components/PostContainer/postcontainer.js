import React from 'react'
import Post from './post'
import './post.css'

const PostContainer = props => {
  return (
    <div className="container">
      {props.data.map(post => (
        <Post key={Date.now()} post={post} />
      ))}
    </div>
  )
}


export default PostContainer

/*
Each `PostContainer` component will then pass the array of comments on each post object as a prop to an instance of the `CommentSection` component.
*/