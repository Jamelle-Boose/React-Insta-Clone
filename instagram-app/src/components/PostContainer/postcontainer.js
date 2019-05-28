import React from 'react'
import Post from './post'
import './post.css'

const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.data.map(post => 
        <Post key={post.imageUrl} post={post} />
      )}
    </div>
  )
}


export default PostContainer

/*
Each `PostContainer` component will then pass the array of comments on each post object as a prop to an instance of the `CommentSection` component.
*/