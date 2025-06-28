import React, { useEffect, useState } from 'react';
import channelsData from '../data/channels.json';

const categories = ['All', 'News', 'Sports', 'Wildlife', 'Humanity'];

const Sidebar = ({ setChannel, searchTerm, selectedCategory, setSelectedCategory }) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    setChannels(channelsData);
  }, []);

  const filtered = channels.filter(ch =>
    ch.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || ch.category === selectedCategory)
  );

  return (
    <div className="w-72 bg-gray-800 text-white h-full overflow-y-auto">
      <h2 className="text-lg font-bold p-4 border-b border-gray-700">Categories</h2>
      <div className="px-4 space-y-2">
        {categories.map(cat => (
          <div
            key={cat}
            className={`cursor-pointer hover:underline ${selectedCategory === cat ? 'text-blue-400' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold p-4 border-b border-gray-700 mt-4">Channels</h2>
      {filtered.map((channel, idx) => (
        <div
          key={idx}
          className="p-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => setChannel(channel)}
        >
          {channel.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
