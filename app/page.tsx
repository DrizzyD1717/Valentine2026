"use client";
import { useScroll, motion, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import StoryMoment from "./components/StoryMoment";
import { mockStory } from "./data/mockStory";
import FloatingHearts from "./components/FloatingHearts";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative">
      <FloatingHearts></FloatingHearts>
      <MusicPlayer></MusicPlayer>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-valentine-500 origin-left z-50"
        style={{ scaleX }}
      />

      <Hero />

      <div className="max-w-5xl mx-auto pb-40">
        {mockStory.map((moment, index) => (
          <StoryMoment key={moment.id} moment={moment} index={index} />
        ))}

        {/* Final Message */}
        <motion.section
          whileInView={{ opacity: 1 }}
          className="h-screen flex items-center justify-center text-center"
        >
          <div className="p-12 bg-valentine-500 text-white rounded-3xl shadow-2xl transform -rotate-1">
            <h3 className="text-4xl font-bold mb-4">
              Happy Valentine's Day! ❤️
            </h3>
            <p>This is just the beginning of our story.</p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
