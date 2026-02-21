import { motion } from "framer-motion";
import { ColorBalloon, Dhol } from "./HoliToys";

const boxes = [
  { label: "दिन", value: "--", color: "text-holi-pink" },
  { label: "घंटे", value: "--", color: "text-holi-orange" },
  { label: "मिनट", value: "--", color: "text-holi-green" },
  { label: "सेकंड", value: "--", color: "text-holi-blue" },
];

export default function CountdownSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Decorative toys */}
      <Dhol className="absolute top-8 left-4 w-20 md:w-24 opacity-20 animate-wiggle" />
      <ColorBalloon className="absolute bottom-12 right-8 w-10 md:w-14 opacity-25 animate-float" color="#ff1493" />
      <ColorBalloon className="absolute bottom-20 right-16 w-8 md:w-10 opacity-20 animate-float-delayed" color="#fbbf24" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            उल्टी गिनती शुरू
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-royal-700 font-bold mb-2">
            बड़े दिन की उल्टी गिनती
          </h2>
          <p className="text-royal-700/40 font-sans text-sm mb-10">
            तारीख जल्द ही घोषित की जाएगी — उत्सव के लिए बने रहें!
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
              className="card-cream rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className={`block text-3xl md:text-5xl font-display font-bold ${box.color}`}>
                {box.value}
              </span>
              <span className="block text-royal-700/40 text-[10px] md:text-xs mt-2 uppercase tracking-widest">
                {box.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Holi dots */}
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
                className={`w-2.5 h-2.5 rounded-full ${color} opacity-50`}
                style={{ animationDelay: `${i * 0.3}s`, animation: "sparkle 3s ease-in-out infinite" }}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
