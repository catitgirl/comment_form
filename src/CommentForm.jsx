import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const filteredComment = newComment.replace(/жопа/gi, "***");
      onAddComment(filteredComment);
      setNewComment("");
    }
  };

  return (
    <div className="comment-form">
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Введите комментарий"
      />
      <button onClick={handleAddComment}>Добавить комментарий</button>
    </div>
  );
};

export default CommentForm;
