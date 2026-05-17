import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="page-container">
      <div className="profile-header card">
        <div className="profile-avatar"></div>
        <div className="profile-info">
          <h2>User Profile</h2>
          <p className="text-muted">@username</p>
          <p>Professional Game Developer & Enthusiast</p>
          <button className="btn btn-outline">Edit Profile</button>
        </div>
      </div>
      <div className="profile-content">
        <h3>Recent Activity</h3>
        <div className="card empty-state">
          <p>No activity yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
