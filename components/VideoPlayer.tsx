'use client';
import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden aspect-square bg-[#0a0a0a] relative">
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/70 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-lg"
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}
