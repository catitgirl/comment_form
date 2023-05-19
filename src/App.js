import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./styles.css";

const App = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (comment) => {
    setComments([comment, ...comments]);
  };

  return (
    <div className="app">
      <h1>Стена плача. Напиши о наболевшем!</h1>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
