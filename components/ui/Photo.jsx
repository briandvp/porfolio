"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Photo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full relative">
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src="/assets/assets/photo.png"
            quality={100}
            fill
            priority
            alt="Profile photo"
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, 
        transition: { duration: 0.4, ease: "easeOut" }, }}
      >
      {/* image */}
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }, 
        }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b1b1b] opacity-90 z-10" />
          <Image
            src="/assets/assets/photo.png" 
            quality={100}
            fill
            alt="" 
            className="object-contain relative"
          />
      </motion.div>
      {/* circle */}
      <motion.svg
  className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] translate-x-4 xl:translate-x-8"
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
>
  <motion.circle 
    cx="253" 
    cy="253" 
    r="250"
    stroke="#00ff99"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ strokeDasharray: "24 10 0 0" }}
    animate={{
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      
    }}
  />
</motion.svg>
      </motion.div> 
    </div>
  );
};

export default Photo;
