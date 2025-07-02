import React from 'react';
import './Sidebar.css';
import { Home, Video, Clock, ThumbsUp, User, PlaySquare } from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className="section">
        <SidebarItem icon={<Home />} label="Início" active />
        <SidebarItem icon={<Video />} label="Shorts" />
        <SidebarItem icon={<PlaySquare />} label="Inscrições" dot />
      </div>

      <hr />

      <div className="section">
        <span className="section-title">Você</span>
        <SidebarItem icon={<Clock />} label="Histórico" />
        <SidebarItem icon={<User />} label="Playlists" />
        <SidebarItem icon={<Video />} label="Seus vídeos" />
        <SidebarItem icon={<Clock />} label="Assistir mais tarde" />
        <SidebarItem icon={<ThumbsUp />} label='Vídeos com "Gostei"' />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active, dot }) {
  return (
    <div className={`sidebar-item ${active ? 'active' : ''}`}>
      <div className="icon">{icon}</div>
      <span className="label">{label}</span>
      {dot && <span className="dot" />}
    </div>
  );
}
