
import React, { useEffect, useState } from 'react';
import ChannelCard from './ChannelCard';
import channelsData from '../data/channels.json';

const ChannelList = ({ onChannelSelect }) => {
  const [channels, setChannels] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    setChannels(channelsData);
  }, []);

  const uniqueCategories = ['All', ...new Set(channels.map(c => c.category))];

  const filteredChannels = category === 'All'
    ? channels
    : channels.filter(c => c.category === category);

  return (
    <div>
      <div className="filter-bar " style={{ margin: '10px 0', padding: '10px', borderRadius: '5px'  }}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {uniqueCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="channel-list flex flex-wrap gap-3 ">
        {filteredChannels.map(channel => (
          <ChannelCard
            key={channel.id}
            name={channel.name}
            logo={channel.logo}
            category={channel.category}
            onClick={() => onChannelSelect(channel.streamUrl)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
