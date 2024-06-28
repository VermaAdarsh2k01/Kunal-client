import React from 'react'

const BlogPost = ({post}) => {
  return (
    <div>{post.slug.current}</div>
  )
}

export default BlogPost