import React, { useState } from 'react';
import Comment from './Comment';

function Post(props) {
  const [likes, setLikes] = useState(30);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Comment />
    </div>
  );
}

export default Post;
