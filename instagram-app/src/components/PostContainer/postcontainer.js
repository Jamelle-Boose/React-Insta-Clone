import React from 'react'
import Post from './post'
import './post.scss'
import styled from 'styled-components'

const PostWrapper = styled.div`
  height: 50%;
  width: 45%;
  min-width: 300px;
  margin: 5px auto;
`

const PostContainer = props => {
  return (
    <PostWrapper>
      {props.data.map(post => <Post key={post.imageUrl} post={post} />)}
    </PostWrapper>
  )
}


export default PostContainer

