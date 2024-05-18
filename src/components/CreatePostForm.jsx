import React, { useState } from 'react';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter content"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePostForm;
