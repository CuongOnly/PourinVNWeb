'use client';

import { useRef } from 'react';

const VideoHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source 
          src="https://res.cloudinary.com/doooncpse/video/upload/q_auto:low,f_auto/v1762587725/7202221208711_safwfv.mp4" 
          type="video/mp4" 
        />
      </video>
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center text-center max-w-4xl px-8 z-10">
        <div>
          <h1 className="text-7xl md:text-8xl font-black mb-6 text-white">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Smooth scrolling experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;