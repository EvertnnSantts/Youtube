import React from 'react';
import './VideoGrid.css';
import VideoCard from './VideoCard';

export default function VideoGrid() {
  const videos = [
    {
      title: 'Bahia 5 x 0 FLAMENGO',
      channel: "ESPN",
      views: 'Atualizado hoje',
      thumb: 'https://img.youtube.com/vi/abcd1/mqdefault.jpg',
    },
    {
      title: 'As 2 noites',
      channel: 'MC Caldas',
      views: '200 mi de visualizações • há 1 dia',
      thumb: 'https://img.youtube.com/vi/abcd2/mqdefault.jpg',
    },
    {
      title: 'Real Madrid 1000 x 1 Barcelona',
      channel: 'ESPN',
      views: '126 mil assistindo • há 2 semanas',
      thumb: 'https://img.youtube.com/vi/abcd3/mqdefault.jpg',
    },
    {
      title: 'FP marcar em sua estreia no el classico',
      channel: 'CazéTV',
      views: '126 mil assistindo',
      thumb: 'https://img.youtube.com/vi/abcd3/mqdefault.jpg',
    },
    {
      title: 'Vitoria 6 x 2 Bahia dentro da fonte',
      channel: 'Globo',
      views: '126 mil assistindo',
      thumb: 'https://img.youtube.com/vi/abcd3/mqdefault.jpg',
    },
    {
      title: 'Bora bahea',
      channel: 'FPtv',
      views: '126 mil assistindo • há 1 horas',
      thumb: 'https://img.youtube.com/vi/abcd3/mqdefault.jpg',
    },
  ];

  return (
    <div className="video-grid">
      {videos.map((video, i) => (
        <VideoCard key={i} {...video} />
      ))}
    </div>
  );
}
