import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { STATS, START_DATE } from "../data/content";

function daysSince(dateStr: string) {
  const start = new Date(dateStr).getTime();
  const now = Date.now();
  return Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));
}

function StatCard({ label, end, suffix, index }: { label: string; end: number; suffix: string; index: number }) {
  const { ref, value } = useCountUp(end);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass rounded-3xl p-4 sm:p-8 text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-rose-glow/10 via-violet-glow/10 to-blue-glow/10" />
      <div className="relative z-10">
        <div className="text-3xl sm:text-5xl font-bold text-gradient font-mono tabular-nums whitespace-nowrap">
          {value.toLocaleString()}
          {suffix}
        </div>
        <div className="mt-3 text-xs sm:text-base text-white/50 tracking-wide">{label}</div>
      </div>
    </motion.div>
  );
}

export default function LoveStats() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-violet-glow uppercase">By the numbers</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Our Love, Quantified</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              end={stat.computeFromStartDate ? daysSince(START_DATE) : stat.end}
              suffix={stat.suffix}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
