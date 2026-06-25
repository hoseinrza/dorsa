import { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    x: Math.random() * 100,
    size: Math.random() * 5 + 3,
    duration: 8 + Math.random() * 10,
    delay: Math.random() * 6,
  }));
}

const STATUS = [
  { label: "Love", value: "Online" },
  { label: "Happiness", value: "Active" },
  { label: "Future Together", value: "Initializing..." },
];

export default function FinalSection() {
  const particles = useMemo(() => generateParticles(28), []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,111,165,0.4), transparent 70%)" }}
        />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bottom-0 rounded-full bg-gradient-to-br from-rose-glow to-violet-glow opacity-40"
            style={{ left: `${p.x}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -800], opacity: [0, 0.6, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight"
        >
          Every day with you feels like{" "}
          <span className="text-gradient">my favorite update.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 glass rounded-2xl p-6 sm:p-8 max-w-md mx-auto text-left font-mono text-sm"
        >
          <div className="text-white/40 mb-4 text-xs tracking-widest uppercase">System Status</div>
          <div className="space-y-3">
            {STATUS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="flex items-center justify-between"
              >
                <span className="text-white/70">❤️ {s.label}</span>
                <span className="text-emerald-400">{s.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-medium text-base text-white bg-gradient-to-r from-rose-glow via-violet-glow to-blue-glow glow-rose transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Continue This Journey With Me
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
