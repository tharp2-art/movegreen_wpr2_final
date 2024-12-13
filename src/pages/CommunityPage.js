import React, { useState } from 'react';
import '../styles/CommunityPage.css';

const CommunityPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'John Doe',
      profilePic: 'https://via.placeholder.com/50',
      timeAgo: 'vor 2 Stunden',
      content: 'Ich liebe es, mit dem Fahrrad zur Arbeit zu fahren! 🚴‍♂️🌿',
      likes: 5,
      comments: 2
    },
    {
      id: 2,
      username: 'Jane Smith',
      profilePic: 'https://via.placeholder.com/50',
      timeAgo: 'vor 1 Stunde',
      content: 'Die neue Buslinie ist super effizient! 🚌💨',
      likes: 8,
      comments: 3
    }
  ]);

  // eslint-disable-next-line no-unused-vars
  const [friends, setFriends] = useState([
    { id: 1, name: 'Alice', profilePic: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', profilePic: 'https://via.placeholder.com/50' }
  ]);

  // eslint-disable-next-line no-unused-vars
  const [groups, setGroups] = useState([
    { id: 1, name: 'Velo Fans', active: true },
    { id: 2, name: 'Bus Enthusiasten', active: false }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  const handleComment = (postId) => {
    // eslint-disable-next-line no-console
    console.log('Comment on post', postId);
  };

  const handleShare = (postId) => {
    // eslint-disable-next-line no-console
    console.log('Share post', postId);
  };

  return (
    <div className="community-page">
      <aside className="sidebar">
        <div className="section-title">Freunde</div>
        <div className="friends-list">
          {friends.map(friend => (
            <div key={friend.id} className="friend-item">
              <img src={friend.profilePic} alt={friend.name} className="profile-pic" />
              <span className="username">{friend.name}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <div className="create-post">
          <button className="create-post-btn">Neuen Beitrag erstellen</button>
        </div>
        
        <div className="activities-feed">
          {posts.map(post => (
            <article key={post.id} className="post">
              <div className="post-header">
                <img src={post.profilePic} alt={post.username} className="profile-pic" />
                <div className="user-info">
                  <div className="username">{post.username}</div>
                  <div className="time-ago">{post.timeAgo}</div>
                </div>
              </div>
              
              <div className="post-content">{post.content}</div>
              
              <div className="post-actions">
                <button className="action-button" onClick={() => handleLike(post.id)}>
                  <span>👍</span> {post.likes} Likes
                </button>
                <button className="action-button" onClick={() => handleComment(post.id)}>
                  <span>💬</span> {post.comments} Kommentare
                </button>
                <button className="action-button" onClick={() => handleShare(post.id)}>
                  <span>📤</span> Teilen
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <aside className="sidebar">
        <div className="section-title">Gruppen</div>
        <div className="groups-list">
          {groups.map(group => (
            <div key={group.id} className="group-item">
              <span className={`status-dot ${group.active ? 'active' : ''}`}></span>
              <span className="group-name">{group.name}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default CommunityPage;
