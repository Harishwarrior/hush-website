"use client";

import { MotionContainer } from "motion-provider";

export const PhoneMockup = () => (
  <MotionContainer
    animation={{ mode: "fadeUp", delay: 2.5, transition: "gentle", duration: 1.2 }}
    elementType="div"
    className="flex justify-center px-4"
  >
    <div className="relative w-[280px] sm:w-[320px] aspect-[1080/2340] rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#000] shadow-2xl overflow-hidden ring-1 ring-white/10">
      {/* OnePlus 6T Waterdrop Notch - Made slightly smaller and more refined */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#000] z-20"
        style={{
          clipPath: "path('M 0 0 L 48 0 C 48 0 42 0 38 3 C 34 6 30 12 24 12 C 18 12 14 6 10 3 C 6 0 0 0 0 0 Z')"
        }}
      />
      
      {/* Front Camera Lens */}
      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0d0d0d] border border-white/5 z-30" />

      {/* Screen content */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/hush-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill"
        />
      </div>

      {/* Subtle Bottom Chin - Reduced to ensure it doesn't cover GIF content */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#000] z-10" />
    </div>
  </MotionContainer>
);
