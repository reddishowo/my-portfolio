"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type TypewriterProps = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursorClassName?: string;
};

export function Typewriter({
  text,
  speed = 38,
  startDelay = 300,
  className,
  cursorClassName = "cursor",
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? text : "");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reduce) return;

    let i = 0;
    const start = setTimeout(() => {
      const tick = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) {
          timers.current.push(setTimeout(tick, speed));
        }
      };
      tick();
    }, startDelay);
    timers.current.push(start);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [text, speed, startDelay, reduce]);

  return (
    <span className={className}>
      {shown}
      <span className={cursorClassName} aria-hidden="true">
        {"\u2588"}
      </span>
    </span>
  );
}
