import React from 'react';


const CommentsSection = ({ comments }) => {
  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <div className="comment-user">{comment.name}</div>
          <div className="comment-text">{comment.comment}</div>
        </div>
      ))}
      {/* Comment form (not functional in this sprint) */}
    </div>
  );
};

export default CommentsSection;
