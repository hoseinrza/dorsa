import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import StarryBackground from "./StarryBackground";

export default function Hero() {
  const { text, done } = useTypewriter("Hello, World ❤️", { speed: 80, startDelay: 500 });

  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <StarryBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-white/60 mb-8 font-mono"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-glow animate-pulse" />
          a love story, deployed to production
        </motion.div>

        <h1 className="font-sans font-semibold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] min-h-[1.3em]">
          <span className="text-gradient">{text}</span>
          <span
            className={`inline-block w-[3px] sm:w-[4px] h-[0.9em] ml-1 bg-white/80 align-middle ${
              done ? "animate-blink" : ""
            }`}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-6 text-base sm:text-xl text-white/60 max-w-xl mx-auto leading-relaxed"
        >
          Among billions of people, life found the perfect match.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10"
        >
          <button
            onClick={scrollToTimeline}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm sm:text-base text-white bg-gradient-to-r from-rose-glow via-violet-glow to-blue-glow glow-rose transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Our Story
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
