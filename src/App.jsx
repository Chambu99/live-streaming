import React, { useState, useRef } from 'react';
import ChannelList from './components/ChannelList';
import VPNBanner from './components/VPNBanner';
import VideoPlayer from './components/VideoPlayer';
import channels from './data/channels';


import './App.css';

function App() {
  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videoRef = useRef(null);

  const handleChannelSelect = (url) => {
    setSelectedStream(url);
    setTimeout(() => {
      videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = ['All', ...new Set(channels.map(c => c.category))];

  const filteredChannels = selectedCategory === 'All'
    ? channels
    : channels.filter(c => c.category === selectedCategory);

  return (
    <>
      <VPNBanner />

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        {uniqueCategories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
        
          >
            {cat}
          </button>
        ))}
      </div>

      <ChannelList
        channels={filteredChannels}
        onChannelSelect={handleChannelSelect}
      />

      {selectedStream ? (
        <div ref={videoRef}>
          <VideoPlayer url={selectedStream} />
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#ccc' }}>
          <p>Please select a channel to start streaming.
           
          </p>
        </div>
      )}
    </>
  );
}

export default App;
