import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';
import ReactPlayer from 'react-player';

function VideoPlayer({ url }) {
  const videoRef = useRef(null);
  const isYouTubeUrl = (url) =>
    url.includes('youtube.com') || url.includes('youtu.be');
  const [retryCount, setRetryCount] = useState(0);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    if (!video || !url) return;

    hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      console.log('📃 HLS manifest parsed.');
      video.play();
    });

    hls.on(Hls.Events.ERROR, (event, data) => {
      console.error('💥 HLS.js error:', data);
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            console.warn('🛜 Fatal network error. Retrying...');
            if (retryCount < 3) {
              setRetryCount((c) => c + 1);
              hls.startLoad(); // retry loading stream
            } else {
              hls.destroy();
            }
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.warn('🎥 Fatal media error. Trying to recover...');
            hls.recoverMediaError();
            break;
          default:
            console.warn('🧯 Fatal error. Destroying player.');
            hls.destroy();
            break;
        }
      }
    });

    return () => {
      if (hls) hls.destroy();
    };
  }, [url, retryCount, reloadTrigger]);

  return (
    <div>
      <div className="video-container" style={{ position: 'relative', paddingTop: '56.25%' }}>

        {isYouTubeUrl(url) ? (
          <ReactPlayer
            url={url}
            ref={videoRef}
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        ) : (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <video
              ref={videoRef}
              controls
              autoPlay
              style={{ width: '100%', maxHeight: '80vh', backgroundColor: 'black' }}
            />
            <button
              onClick={() => setReloadTrigger((c) => c + 1)}
              className="reload-button"
              
            >
              Reload Stream
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
