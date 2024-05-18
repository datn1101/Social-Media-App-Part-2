import React from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

function App() {
  const posts = [
    { title: 'Post 1', content: 'Content for post 1', likes: 10 },
    { title: 'Post 2', content: 'Content for post 2', likes: 20 },
  ];

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
