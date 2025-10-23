"use client";
import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number; // Add delay prop in milliseconds
}

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Wait for the delay before starting
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
    let iteration = 0;
    const speed = 18; // milliseconds per frame

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";

            if (index < iteration) {
              return text[index];
            }

            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, hasStarted]);

  return <span className={className}>{displayText}</span>;
}
