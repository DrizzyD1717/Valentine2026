"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-6"
      >
        <Heart className="text-valentine-500 fill-valentine-500 w-20 h-20" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold text-valentine-900 mb-4"
      >
        Every Love Story <br />
        <span className="text-valentine-500 underline decoration-wavy">
          Deserves
        </span>{" "}
        a Stage.
      </motion.h1>

      <p className="text-lg text-valentine-600 max-w-md mb-8">
        Create a beautiful, infinite-scrolling tribute to your favorite person.
        Scroll down to begin the journey.
      </p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-valentine-400"
      >
        <p className="text-sm font-semibold uppercase tracking-widest">
          Scroll to Explore
        </p>
      </motion.div>
    </section>
  );
}
