import React, {useState} from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  const [commentsData]=useState(comments)

  return (
    <div>
      {commentsData.map( data => (
       <Comment key={data.id} comment = {commentsData}/>
      ))/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};
export default Comments;
