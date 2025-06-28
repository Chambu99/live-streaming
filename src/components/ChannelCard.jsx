
import React from 'react';
import './ChannelCard.css';

const ChannelCard = ({ name, logo, category, onClick }) => (
  <div className="channel-card" onClick={onClick}>
    <img src={logo} alt={name} className="channel-logo" />
    <div className="channel-info">
      <h4>{name}</h4>
      <p>{category}</p>
    </div>
  </div>
);

export default ChannelCard;
