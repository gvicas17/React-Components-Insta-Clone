import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {

  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, postsContainer } = props;
  return ( 
    <div className='posts-container-wrapper'>
      {postsContainer.map(item => (
        <Post key = {item.id} post={item} likePost = {likePost}/>
      ))}
    </div>
  );
};
/* Map through the posts array returning a Post component at each iteration */
/* remember to pass what is being passed through .map function */
export default Posts;
