import React from 'react';

const NowPlaying = ({ channel }) => {
  if (!channel) return null;
  return (
    <div className="mt-4 p-4 bg-gray-800 rounded shadow">
      <h3 className="text-lg font-bold">Now Playing:</h3>
      <p>{channel.name}</p>
      {channel.category && <p className="text-sm text-gray-400">{channel.category}</p>}
    </div>
  );
};

export default NowPlaying;
