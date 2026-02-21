import { motion } from "framer-motion";

const boxes = [
  { label: "Days", value: "--", color: "text-holi-pink" },
  { label: "Hours", value: "--", color: "text-holi-yellow" },
  { label: "Minutes", value: "--", color: "text-holi-green" },
  { label: "Seconds", value: "--", color: "text-holi-blue" },
];

export default function CountdownSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 font-sans text-xs tracking-[0.3em] uppercase mb-3">
            The Countdown Begins
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-bold mb-2">
            Counting Down To The Big Day
          </h2>
          <p className="text-royal-200/50 font-sans text-sm mb-10">
            Date will be announced soon — stay tuned for the celebration!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto"
        >
          {boxes.map((box) => (
            <div
              key={box.label}
              className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:border-gold-400/20 transition-all duration-300"
            >
              <span className={`block text-3xl md:text-5xl font-display font-bold ${box.color}`}>
                {box.value}
              </span>
              <span className="block text-royal-300/50 text-[10px] md:text-xs mt-2 uppercase tracking-widest">
                {box.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Holi powder splash decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex justify-center gap-2"
        >
          {["bg-holi-pink", "bg-holi-orange", "bg-holi-yellow", "bg-holi-green", "bg-holi-blue", "bg-holi-purple"].map(
            (color, i) => (
              <div
                key={color}
                className={`w-2 h-2 rounded-full ${color} opacity-40`}
                style={{ animationDelay: `${i * 0.3}s`, animation: "sparkle 3s ease-in-out infinite" }}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
