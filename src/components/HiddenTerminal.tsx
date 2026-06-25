import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HER_NAME } from "../data/content";

interface Line {
  type: "input" | "output" | "status";
  text: string;
}

const SCRIPT: Line[] = [
  { type: "input", text: "whoami" },
  { type: "output", text: `You are ${HER_NAME}, the best thing that ever happened to me.` },
  { type: "input", text: "system status" },
  { type: "status", text: "Love Engine: Running" },
  { type: "status", text: "Happiness: Stable" },
  { type: "status", text: "Future: Loading..." },
];

function useSequentialTyping(lines: Line[], active: boolean) {
  const [rendered, setRendered] = useState<{ text: string; type: Line["type"]; complete: boolean }[]>([]);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const typeLine = (lineIndex: number) => {
      if (cancelled || lineIndex >= lines.length) return;
      const line = lines[lineIndex];
      let charIndex = 0;
      setRendered((prev) => [...prev, { text: "", type: line.type, complete: false }]);

      const speed = line.type === "input" ? 60 : 18;

      timer = setInterval(() => {
        charIndex++;
        setRendered((prev) => {
          const next = [...prev];
          next[lineIndex] = { text: line.text.slice(0, charIndex), type: line.type, complete: charIndex >= line.text.length };
          return next;
        });
        if (charIndex >= line.text.length) {
          clearInterval(timer);
          timer = setTimeout(() => typeLine(lineIndex + 1), line.type === "input" ? 350 : 500);
        }
      }, speed);
    };

    typeLine(0);
    return () => {
      cancelled = true;
      clearInterval(timer);
      clearTimeout(timer);
    };
  }, [active, lines]);

  return rendered;
}

export default function HiddenTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const rendered = useSequentialTyping(SCRIPT, inView);

  return (
    <section className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-blue-glow uppercase">access granted</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">A Hidden Terminal, Just for You</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden glass shadow-2xl shadow-blue-glow/10"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-3 text-xs text-white/40 font-mono">terminal — love-engine</span>
          </div>

          <div className="p-6 sm:p-8 font-mono text-sm sm:text-[15px] min-h-[280px] leading-relaxed">
            {rendered.map((line, i) => {
              const isLast = i === rendered.length - 1;
              if (line.type === "input") {
                return (
                  <div key={i} className="flex items-center gap-2 text-white">
                    <span className="text-emerald-400">❤ ~</span>
                    <span>{line.text}</span>
                    {isLast && !line.complete && (
                      <span className="inline-block w-2 h-4 bg-white/80 animate-blink" />
                    )}
                  </div>
                );
              }
              if (line.type === "status") {
                const [label, value] = line.text.split(": ");
                return (
                  <div key={i} className="text-white/70 pl-1">
                    {label}: <span className="text-rose-glow">{value}</span>
                  </div>
                );
              }
              return (
                <div key={i} className="text-violet-glow pl-1 mb-2 italic">
                  "{line.text}"
                </div>
              );
            })}
            {rendered.length === 0 && <span className="text-white/30">waiting for connection...</span>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
