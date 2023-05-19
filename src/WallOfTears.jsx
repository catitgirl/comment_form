import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const WallOfTears = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (comment) => {
    const filteredComment = comment.replace(/жопа/gi, "***");
    if (filteredComment.trim() !== "") {
      setComments([filteredComment, ...comments]);
    }
  };

  return (
    <div>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default WallOfTears;
