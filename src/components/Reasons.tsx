import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { REASONS } from "../data/content";

const ICONS: Record<string, ReactElement> = {
  smile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
      <path d="M9 9h.01M15 9h.01" strokeLinecap="round" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
      <path d="M12 8l1.6 3.4L17 13l-3.4 1.6L12 18l-1.6-3.4L7 13l3.4-1.6L12 8Z" />
    </svg>
  ),
  laugh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 13a5 5 0 0 0 10 0Z" />
      <path d="M9 9h.01M15 9h.01" strokeLinecap="round" />
    </svg>
  ),
  infinity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6.5 9a4 4 0 1 0 0 6c1.5 0 2.7-1 4-3 1.3-2 2.5-3 4-3a4 4 0 1 1 0 6c-1.5 0-2.7-1-4-3" />
    </svg>
  ),
};

export default function Reasons() {
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
          <span className="text-xs font-mono tracking-widest text-rose-glow uppercase">reasons.length === ∞</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Why I Love You</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-7 relative overflow-hidden transition-colors duration-300 hover:border-rose-glow/30"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-rose-glow/20 to-violet-glow/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose-glow/20 to-violet-glow/20 text-rose-glow mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <div className="w-6 h-6">{ICONS[reason.icon]}</div>
                </div>
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
