import { motion } from "framer-motion";
import { TIMELINE } from "../data/content";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-blue-glow uppercase">git log --our-story</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Our Commit History</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-rose-glow via-violet-glow to-blue-glow opacity-40" />

          <div className="space-y-10">
            {TIMELINE.map((event, i) => (
              <motion.div
                key={event.hash}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative flex gap-5 pl-0"
              >
                <div className="relative z-10 shrink-0">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 + 0.1 }}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center bg-gradient-to-br from-rose-glow/30 to-violet-glow/30 glow-rose"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-rose-glow to-violet-glow" />
                  </motion.div>
                </div>

                <div className="glass rounded-2xl p-5 flex-1 hover:border-violet-glow/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-white/40 mb-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-rose-glow">{event.hash}</span>
                    <span>{event.branch}</span>
                    <span className="ml-auto">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  <p className="mt-1.5 text-sm text-white/50 font-mono">{event.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
