import { motion } from "framer-motion";
import { ColorPowderHand } from "./HoliToys";

export default function MessageSection() {
  return (
    <section id="message" className="relative py-24 px-4 overflow-hidden">
      <ColorPowderHand className="absolute top-12 right-6 w-18 md:w-24 opacity-25 animate-float" color="#ff1493" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative card-cream rounded-3xl p-10 md:p-16 text-center shadow-lg"
        >
          {/* Top badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-1.5 rounded-full border border-gold-400/30 shadow-sm">
            <span className="text-gold-500 font-display text-sm tracking-[0.15em] font-bold">
              नन्हे बच्चों की मनुहार
            </span>
          </div>

          {/* Gold corner ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400/25 rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400/25 rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-400/25 rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400/25 rounded-br-xl" />

          {/* Decorative quotes */}
          <div className="absolute top-8 left-8 text-gold-400/30 text-7xl font-cursive select-none leading-none">
            &ldquo;
          </div>
          <div className="absolute bottom-8 right-8 text-gold-400/30 text-7xl font-cursive select-none leading-none rotate-180">
            &ldquo;
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-royal-700 font-display text-xl md:text-2xl leading-relaxed mb-6 relative z-10 italic font-bold"
          >
            "मेरे मैया के ढूंढ पर जरूर-जरूर पधारजो सा!"
          </motion.p>

          <div className="divider-holi w-40 mx-auto rounded-full mb-6" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold-500 font-cursive text-2xl md:text-3xl relative z-10 font-bold"
          >
            — ओजस, यशस्वी
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
