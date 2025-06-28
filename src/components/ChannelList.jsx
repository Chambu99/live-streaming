import React from 'react';
import ChannelCard from './ChannelCard';

function ChannelList({ channels, onChannelSelect }) {
  return (
    <div>
      <div
        className="channel-list"
        
      >
        {channels.map(channel => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            onSelect={onChannelSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default ChannelList;
