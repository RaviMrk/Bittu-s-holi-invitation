import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="divider-holi w-48 mx-auto rounded-full mb-10" />

        <p className="font-cursive text-5xl md:text-6xl text-gold-300 mb-3 drop-shadow-[0_0_20px_rgba(212,160,23,0.2)]">
          Bittu
        </p>
        <p className="holi-text font-display text-sm md:text-base font-semibold tracking-wider mb-2">
          Rang Barse!
        </p>
        <p className="text-royal-200/40 font-sans text-xs">
          We look forward to celebrating this colorful day with you
        </p>

        {/* Holi dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {["bg-holi-pink", "bg-holi-orange", "bg-holi-yellow", "bg-holi-green", "bg-holi-blue", "bg-holi-purple"].map(
            (color) => (
              <div key={color} className={`w-1.5 h-1.5 rounded-full ${color} opacity-50`} />
            )
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 text-royal-400/40 text-[10px]">
          <span>Made with</span>
          <span className="text-holi-pink animate-pulse">♥</span>
          <span>for our little prince</span>
        </div>
      </motion.div>
    </footer>
  );
}
