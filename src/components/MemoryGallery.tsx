import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MEMORIES, type MemoryPhoto } from "../data/content";

function PolaroidCard({ photo, index, onOpen }: { photo: MemoryPhoto; index: number; onOpen: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseRotate = (index % 2 === 0 ? -1 : 1) * (2 + (index % 3));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: baseRotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ perspective: 800 }}
      className="cursor-pointer"
      onClick={onOpen}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-white p-3 pb-12 rounded-md shadow-2xl shadow-black/50 relative"
      >
        <div className="aspect-square overflow-hidden rounded-sm bg-ink-800">
          <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <p className="absolute bottom-3 left-0 right-0 text-center text-ink-900 font-medium text-sm" style={{ fontFamily: "cursive" }}>
          {photo.caption}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function MemoryGallery() {
  const [active, setActive] = useState<MemoryPhoto | null>(null);

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
          <span className="text-xs font-mono tracking-widest text-rose-glow uppercase">/memories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Captured Moments</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 px-2">
          {MEMORIES.map((photo, i) => (
            <PolaroidCard key={photo.src} photo={photo} index={i} onOpen={() => setActive(photo)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="max-w-lg w-full bg-white p-4 pb-16 rounded-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.caption} className="w-full rounded-sm object-cover" />
              <p className="absolute bottom-5 left-0 right-0 text-center text-ink-900 text-lg" style={{ fontFamily: "cursive" }}>
                {active.caption}
              </p>
              <button
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-ink-900 text-white flex items-center justify-center shadow-lg"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
