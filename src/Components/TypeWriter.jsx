import React, { useEffect, useState } from "react";

const TypewriterText = ({
  texts = [],
  speed = 120,
  delay = 1500,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentText.length) {
          setIsDeleting(true);
          setTimeout(() => {}, delay);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <h2 className="text-[18px] sm:text-[22px] lg:text-[26px] font-medium text-cyan-400 mt-6">
      I am a{" "}
      <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">
        {displayText}
      </span>
    </h2>
  );
};

export default TypewriterText;