import React from 'react';

function ChannelCard({ channel, onSelect }) {
  if (!channel) return null;

  return (
    <div
      className="channel-card"
      onClick={() => onSelect(channel.streamUrl)}
    
    >
      <img src={channel.logo} alt={channel.name} width={100} />
      <h4 style={{ marginTop: '0.5rem' }}>{channel.name}</h4>
      <p style={{ fontSize: '0.8rem', color: '#666' }}>{channel.category}</p>
    </div>
  );
}

export default ChannelCard;
