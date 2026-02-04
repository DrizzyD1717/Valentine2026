"use client";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Simple error handling for browser autoplay blocks
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Ensure your file is at public/audio/bg-music.mp3 */}
      <audio ref={audioRef} loop src="/audio/oceans.mp3" />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-xl border border-valentine-200 rounded-full shadow-xl text-valentine-600 hover:bg-white/90 transition-all"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="on"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Volume2 size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="off"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <VolumeX size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="text-sm font-bold uppercase tracking-tighter">
          {isPlaying ? "Music On" : "Music Off"}
        </span>

        {/* Visualizer bars - only visible when playing */}
        {isPlaying && (
          <div className="flex gap-0.5 h-3 items-end">
            {[0.2, 0.4, 0.6].map((delay, i) => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                  delay: delay,
                }}
                className="w-0.5 bg-valentine-500 rounded-full"
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
}
