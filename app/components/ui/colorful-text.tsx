"use client";
import React from "react";
import { motion } from "framer-motion";  // Fix the import for motion

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(180, 180, 255)", // Light Purple
    "rgb(190, 190, 255)", // Lavender Purple
    "rgb(210, 210, 255)", // Soft Violet
    "rgb(230, 230, 255)", // Pastel Lavender
    "rgb(240, 240, 255)", // Very Light Purple
    "rgb(250, 250, 255)", // Almost White Purple
    "rgb(255, 255, 255)", // Pure White (for contrast)
    "rgb(190, 190, 255)", // Light Lavender
    "rgb(220, 220, 255)", // Muted Violet
    "rgb(240, 240, 255)", // Light Pastel Purple
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // No need for 'col' as a dependency

  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
