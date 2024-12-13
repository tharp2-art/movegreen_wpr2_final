import React from 'react';
import '../styles/Community.css';

const posts = [
  {
    id: 1,
    user: 'Max M.',
    avatar: '/assets/avatars/user1.jpg',
    content: 'Heute mit dem Fahrrad zur Arbeit - 5kg CO₂ eingespart! 🚲',
    likes: 24,
    comments: 3,
    timestamp: '2 Stunden'
  },
  {
    id: 2,
    user: 'Laura K.',
    avatar: '/assets/avatars/user2.jpg',
    content: 'Neue Fahrradroute durch den Englischen Garten entdeckt. Wunderschön! 🌳',
    likes: 18,
    comments: 5,
    timestamp: '4 Stunden'
  },
  {
    id: 3,
    user: 'Thomas H.',
    avatar: '/assets/avatars/user3.jpg',
    content: 'Car-Sharing statt eigenes Auto - beste Entscheidung! 🚗',
    likes: 31,
    comments: 7,
    timestamp: '1 Tag'
  }
];

function Community() {
  return (
    <div className="community-page">
      <div className="community-header">
        <h1>Community</h1>
        <button className="button-primary">Beitrag erstellen</button>
      </div>

      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.avatar} alt={post.user} className="avatar" />
              <div className="post-meta">
                <h3>{post.user}</h3>
                <span className="timestamp">{post.timestamp}</span>
              </div>
            </div>
            
            <div className="post-content">
              <p>{post.content}</p>
            </div>
            
            <div className="post-actions">
              <button className="action-button">
                <i className="fas fa-heart"></i>
                <span>{post.likes}</span>
              </button>
              <button className="action-button">
                <i className="fas fa-comment"></i>
                <span>{post.comments}</span>
              </button>
              <button className="action-button">
                <i className="fas fa-share"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
