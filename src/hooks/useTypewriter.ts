import { useEffect, useState } from "react";

interface Options {
  speed?: number;
  startDelay?: number;
  loop?: boolean;
  pauseTime?: number;
}

export function useTypewriter(text: string, options: Options = {}) {
  const { speed = 70, startDelay = 300, loop = false, pauseTime = 2000 } = options;
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      if (i <= text.length) {
        setOutput(text.slice(0, i));
        i++;
        timeoutId = setTimeout(tick, speed);
      } else {
        setDone(true);
        if (loop) {
          timeoutId = setTimeout(() => {
            i = 0;
            setDone(false);
            tick();
          }, pauseTime);
        }
      }
    };

    const startId = setTimeout(tick, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay, loop, pauseTime]);

  return { text: output, done };
}
