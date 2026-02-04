"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface MomentProps {
  moment: any;
  index: number;
}

export default function StoryMoment({ moment, index }: MomentProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-[60vh] flex flex-col items-center justify-center p-8 mb-20 w-full ${
        isEven ? "md:items-start" : "md:items-end"
      }`}
    >
      <div
        className={`flex flex-col ${isEven ? "items-start text-left" : "items-end text-right"} max-w-2xl w-full`}
      >
        {/* TEXT TYPE */}
        {moment.type === "text" && (
          <div className="w-full">
            <h2 className="text-4xl md:text-6xl font-serif text-valentine-900 mb-4 italic">
              {moment.content}
            </h2>
            <p className="text-valentine-500 text-xl">{moment.subtext}</p>
          </div>
        )}

        {/* IMAGE TYPE */}
        {moment.type === "image" && (
          <div className="relative group w-full flex flex-col items-center md:items-inherit">
            <div className="absolute -inset-4 bg-valentine-200 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>

            {/* Image Container with defined constraints for 'fill' */}
            <div className="relative h-[400px] w-full max-w-sm overflow-hidden rounded-xl shadow-2xl border-8 border-white transform rotate-2 group-hover:rotate-0 transition duration-500">
              <Image
                src={moment.url}
                alt={moment.caption || "Memory"}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>

            <p className="mt-4 font-handwriting text-2xl text-valentine-600">
              {moment.caption}
            </p>
          </div>
        )}

        {/* QUOTE TYPE */}
        {moment.type === "quote" && (
          <div className="bg-white/40 backdrop-blur-md p-10 rounded-3xl border-2 border-valentine-200 inline-block">
            <p className="text-3xl text-valentine-500 font-light italic">
              {moment.content}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
