import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment, index) => (
        <li key={index} className={index === 0 ? "highlighted" : ""}>
          {comment}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
