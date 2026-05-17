import React from 'react';

const Feed: React.FC = () => {
  return (
    <div className="page-container feed-page">
      <div className="feed-header">
        <h2>Main Feed</h2>
      </div>
      <div className="compose-post card">
        <textarea placeholder="What's on your mind?"></textarea>
        <div className="compose-actions">
          <button className="btn btn-primary">Post</button>
        </div>
      </div>
      <div className="feed-stream">
        {/* Placeholder posts */}
        {[1, 2, 3].map((post) => (
          <div key={post} className="post card">
            <div className="post-header">
              <div className="post-avatar-small"></div>
              <div className="post-author">
                <h4>User {post}</h4>
                <span className="text-muted">2 hours ago</span>
              </div>
            </div>
            <div className="post-body">
              <p>This is a placeholder post #{post} for the main feed of ggj-pro-social.</p>
            </div>
            <div className="post-footer">
              <button className="btn-text">Like</button>
              <button className="btn-text">Comment</button>
              <button className="btn-text">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
