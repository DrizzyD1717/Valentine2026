"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import Hero from "../components/Hero";
import StoryMoment from "../components/StoryMoment";
import FloatingHearts from "../components/FloatingHearts";
import MusicPlayer from "../components/MusicPlayer";

export default function ExperiencePage() {
  const searchParams = useSearchParams();
  const [storyData, setStoryData] = useState<any[]>([]);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      try {
        // Decode the Base64 string back into JSON
        const decodedData = JSON.parse(decodeURIComponent(atob(data)));
        setStoryData(decodedData);
      } catch (error) {
        console.error("Failed to decode story data:", error);
      }
    }
  }, [searchParams]);

  if (storyData.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-valentine-50">
        <p className="text-valentine-400 animate-pulse">Loading your story...</p>
      </div>
    );
  }

  return (
    <main className="relative bg-valentine-50 overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-valentine-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="relative z-10">
        <Hero />

        <div className="max-w-5xl mx-auto pb-40">
          {storyData.map((moment, index) => (
            <StoryMoment key={moment.id} moment={moment} index={index} />
          ))}
          
          <motion.section 
            whileInView={{ opacity: 1, scale: [0.9, 1] }}
            className="h-screen flex items-center justify-center text-center p-6"
          >
            <div className="p-12 bg-valentine-500 text-white rounded-3xl shadow-2xl transform -rotate-1 max-w-lg">
              <h3 className="text-4xl font-bold mb-4">Forever to go! ❤️</h3>
              <p className="text-valentine-100">Thank you for being part of my journey.</p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}