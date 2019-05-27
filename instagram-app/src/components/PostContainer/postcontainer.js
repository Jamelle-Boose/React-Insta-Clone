import React from 'react'
import CommentSection from '../CommentSection/commentsection'

const PostContainer = props => {
  return (
    <div>
      {props.data.comments.map(comment => (
        <CommentSection comment={comment} />
      ))}

      <div>

      </div>
    </div>
  )
}


export default PostContainer

/*
Each `PostContainer` component will then pass the array of comments on each post object as a prop to an instance of the `CommentSection` component.
*/