import React, { useState, useRef } from 'react';
import ChannelList from './components/ChannelList';
import VPNBanner from './components/VPNBanner';
import VideoPlayer from './components/VideoPlayer';

import './App.css';

function App() {
  const [selectedStream, setSelectedStream] = useState(null);
  
  const videoRef = useRef(null); // 🔁 This ref points to the video player

  const handleChannelSelect = (url) => {
    setSelectedStream(url);

    // Delay scroll just a little so the video player mounts before scroll
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // slight delay to allow render
  };

  return (
    <div className="app-container">
      <VPNBanner />
      <ChannelList onChannelSelect={handleChannelSelect} />

      {selectedStream ? (
        <div ref={videoRef}>
          <VideoPlayer url={selectedStream} />
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#ccc' }}>
          <p>Please select a channel to start streaming.</p>
        </div>
      )}
    </div>
  );
}

export default App;
