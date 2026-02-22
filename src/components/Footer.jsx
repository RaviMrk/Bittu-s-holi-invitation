import { motion } from "framer-motion";
import { Pichkari, GulalBowl } from "./HoliToys";

export default function Footer() {
  return (
    <footer className="relative py-10 px-4 text-center overflow-hidden">
      <Pichkari className="absolute bottom-8 left-4 w-20 md:w-24 opacity-15 rotate-20" color1="#ff6b35" color2="#fbbf24" />
      <GulalBowl className="absolute bottom-4 right-6 w-16 md:w-20 opacity-15" color="#3b82f6" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg mx-auto"
      >
        <div className="divider-holi w-48 mx-auto rounded-full mb-8" />

        {/* Sender card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl border-t-4 border-t-gold-400 overflow-hidden shadow-md mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gold-300/15 to-transparent opacity-60" />
          <div className="absolute inset-0 card-cream" style={{ zIndex: -1 }} />

          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold-400/20 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold-400/20 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold-400/20 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold-400/20 rounded-br-2xl" />

          <div className="relative z-10 px-8 py-7">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-gold-400/10 ring-2 ring-gold-400/20 flex items-center justify-center text-2xl">
                ✉️
              </div>
            </div>

            <div className="flex justify-center gap-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 opacity-40" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 opacity-70" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 opacity-40" />
            </div>

            <p className="text-gold-500 font-sans text-xs tracking-[0.2em] uppercase font-bold mb-3">
              प्रेषक
            </p>
            <p className="text-royal-700 font-display text-lg md:text-xl font-bold mb-1">
              छगनलालजी पुत्र श्री जेपारामजी परमार
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent mx-auto my-3 rounded-full" />
            <p className="text-royal-700/80 font-sans text-base font-semibold">
              📞 9860182254
            </p>
          </div>
        </motion.div>

        {/* Name & tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="font-cursive text-5xl md:text-6xl text-gold-500 mb-3 font-bold drop-shadow-[0_2px_10px_rgba(212,160,23,0.2)]">
            जियांश
          </p>
          <p className="holi-text font-display text-lg md:text-xl font-bold tracking-wider mb-3">
            रंग बरसे!
          </p>
          <p className="text-royal-700/70 font-sans text-sm font-semibold max-w-xs mx-auto leading-relaxed">
            हम आपके साथ इस रंगीन दिन को मनाने के लिए उत्सुक हैं
          </p>
        </motion.div>

        {/* Holi dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-2.5 mt-10"
        >
          {["bg-holi-pink", "bg-holi-orange", "bg-holi-yellow", "bg-holi-green", "bg-holi-blue", "bg-holi-purple"].map(
            (color, i) => (
              <div
                key={color}
                className={`w-2.5 h-2.5 rounded-full ${color} opacity-60`}
                style={{ animationDelay: `${i * 0.3}s`, animation: "sparkle 3s ease-in-out infinite" }}
              />
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-8 text-royal-700/50 text-xs font-semibold"
        >
          <span>चि. जियांश (बिट्टू) के लिए</span>
          <span className="text-holi-pink animate-pulse">♥</span>
          <span>से बनाया गया</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}
