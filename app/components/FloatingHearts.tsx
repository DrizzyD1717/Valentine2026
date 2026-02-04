"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<
    {
      id: number;
      left: string;
      size: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    // Generate 15 random hearts once the component mounts
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * (40 - 10) + 10,
      duration: Math.random() * (20 - 10) + 10,
      delay: Math.random() * 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.5, 0.5, 0],
            x: ["0%", "5%", "-5%", "0%"], // Subtle swaying movement
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            left: heart.left,
            position: "absolute",
          }}
        >
          <Heart
            size={heart.size}
            className="text-valentine-300 fill-valentine-200 opacity-30"
          />
        </motion.div>
      ))}
    </div>
  );
}
