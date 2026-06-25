import { motion } from "framer-motion";

const kw = "text-violet-glow";
const prop = "text-blue-glow";
const str = "text-emerald-400";
const num = "text-rose-glow";
const com = "text-white/30";

export default function CodeLove() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">love.ts</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Written in Code, Felt in Real Life</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden glass shadow-2xl shadow-violet-glow/10"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-3 text-xs text-white/40 font-mono">love.ts</span>
          </div>

          <pre className="p-6 sm:p-8 text-[13px] sm:text-[15px] leading-relaxed overflow-x-auto font-mono">
            <code>
              <span className={com}>{"// the only object that ever mattered"}</span>{"\n"}
              <span className={kw}>const</span> her = {"{"}{"\n"}
              {"  "}beautiful: <span className={num}>true</span>,{"\n"}
              {"  "}kind: <span className={num}>true</span>,{"\n"}
              {"  "}smart: <span className={num}>true</span>,{"\n"}
              {"  "}favoritePerson: <span className={num}>true</span>,{"\n"}
              {"}"};{"\n\n"}
              <span className={kw}>let</span> happiness = <span className={prop}>Infinity</span>;{"\n\n"}
              <span className={kw}>while</span> (together) {"{"}{"\n"}
              {"  "}happiness++;{"\n"}
              {"}"}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-[8px] h-[1.1em] bg-rose-glow ml-1 align-middle"
              />
            </code>
          </pre>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-6 text-sm text-white/40 font-mono"
        >
          <span className={str}>// no exceptions thrown. no bugs found. just us.</span>
        </motion.p>
      </div>
    </section>
  );
}
