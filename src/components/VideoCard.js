import React from 'react';
import './VideoCard.css';

export default function VideoCard({ title, channel, views, thumb, live }) {
  return (
    <div className="video-card">
      <img src={thumb} alt={title} />
      {live && <span className="live-badge">🔴 AO VIVO</span>}
      <div className="video-info">
        <h4>{title}</h4>
        <p>{channel}</p>
        <small>{views}</small>
      </div>
    </div>
  );
}
