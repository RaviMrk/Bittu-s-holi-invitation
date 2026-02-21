import { motion } from "framer-motion";
import { Pichkari, GulalBowl } from "./HoliToys";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 text-center overflow-hidden">
      <Pichkari className="absolute bottom-8 left-4 w-20 md:w-24 opacity-15 rotate-[20deg]" color1="#ff6b35" color2="#fbbf24" />
      <GulalBowl className="absolute bottom-4 right-6 w-16 md:w-20 opacity-15" color="#3b82f6" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="divider-holi w-48 mx-auto rounded-full mb-10" />

        {/* Sender info */}
        <div className="card-cream inline-block rounded-2xl px-8 py-5 shadow-sm border border-gold-400/20 mb-8">
          <p className="text-gold-500 font-sans text-sm tracking-[0.15em] font-bold mb-2">
            प्रेषक
          </p>
          <p className="text-royal-700 font-display text-lg md:text-xl font-bold">
            छगनलालजी पुत्र श्री जेपारामजी परमार
          </p>
          <p className="text-royal-700 font-sans text-base font-semibold mt-1">
            📞 9860182254
          </p>
        </div>

        <p className="font-cursive text-4xl md:text-5xl text-gold-500 mb-3 font-bold drop-shadow-[0_2px_8px_rgba(212,160,23,0.15)]">
          जियांश
        </p>
        <p className="holi-text font-display text-base md:text-lg font-bold tracking-wider mb-2">
          रंग बरसे!
        </p>
        <p className="text-royal-700/80 font-sans text-sm font-semibold">
          हम आपके साथ इस रंगीन दिन को मनाने के लिए उत्सुक हैं
        </p>

        {/* Holi dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {["bg-holi-pink", "bg-holi-orange", "bg-holi-yellow", "bg-holi-green", "bg-holi-blue", "bg-holi-purple"].map(
            (color) => (
              <div key={color} className={`w-2 h-2 rounded-full ${color} opacity-70`} />
            )
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 text-royal-700/60 text-xs font-semibold">
          <span>चि. जियांश (बिट्टू) के लिए</span>
          <span className="text-holi-pink animate-pulse">♥</span>
          <span>से बनाया गया</span>
        </div>
      </motion.div>
    </footer>
  );
}
