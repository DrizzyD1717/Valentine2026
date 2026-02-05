"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Hero from "./components/Hero";
import FloatingHearts from "./components/FloatingHearts";

export default function Home() {
  return (
    <main className="relative bg-valentine-50 overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10">
        <Hero />

        {/* Call to Action Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        >
          <div className="max-w-2xl bg-white/30 backdrop-blur-md p-12 rounded-3xl border border-white/50 shadow-xl">
            <Sparkles className="text-valentine-500 mx-auto mb-6" size={40} />
            <h2 className="text-3xl md:text-5xl font-bold text-valentine-900 mb-6">
              Ready to tell your story?
            </h2>
            <p className="text-valentine-600 text-lg mb-10">
              Create a personalized, infinite-scrolling experience for your partner in minutes. 
              No coding required just your memories and a lot of love.
            </p>
            
            <Link href="/create">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-valentine-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-valentine-600 transition-all mx-auto"
              >
                Start Creating
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}





// "use client";
// import { useScroll, motion, useSpring } from "framer-motion";
// import Hero from "./components/Hero";
// import StoryMoment from "./components/StoryMoment";
// import { mockStory } from "./data/mockStory";
// import FloatingHearts from "./components/FloatingHearts";
// import MusicPlayer from "./components/MusicPlayer";

// export default function Home() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <main className="relative">
//       <FloatingHearts></FloatingHearts>
//       <MusicPlayer></MusicPlayer>
//       {/* Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-2 bg-valentine-500 origin-left z-50"
//         style={{ scaleX }}
//       />

//       <Hero />

//       <div className="max-w-5xl mx-auto pb-40">
//         {mockStory.map((moment, index) => (
//           <StoryMoment key={moment.id} moment={moment} index={index} />
//         ))}

//         {/* Final Message */}
//         <motion.section
//           whileInView={{ opacity: 1 }}
//           className="h-screen flex items-center justify-center text-center"
//         >
//           <div className="p-12 bg-valentine-500 text-white rounded-3xl shadow-2xl transform -rotate-1">
//             <h3 className="text-4xl font-bold mb-4">
//               Happy Valentine's Day! ❤️
//             </h3>
//             <p>This is just the beginning of our story.</p>
//           </div>
//         </motion.section>
//       </div>
//     </main>
//   );
// }
